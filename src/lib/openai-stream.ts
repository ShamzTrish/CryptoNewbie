import { ParsedEvent, ReconnectInterval, createParser } from "eventsource-parser"

// user | system is something that open AI enforces when you make a request to them, hence we need to use exactly these names
export type ChatGPTAgent = 'user' | 'system'


export interface ChatGPTMessage {
    role: ChatGPTAgent
    content: string
}


//OpenAIStreamPayload is our typescript 'schema' that we wrote from this payload
export interface OpenAIStreamPayload {
    model: string,
    messages: ChatGPTMessage[],
    temperature: number
    top_p: number,
    frequency_penalty: number
    presence_penalty: number
    max_tokens: number
    stream: boolean,
    n: number
}


// this is the main function that sends & recieves messages from open AI

export async function OpenAIStream(payload: OpenAIStreamPayload) {

    const encoder = new TextEncoder() //this encodes text
    const decoder = new TextDecoder() //this is what we will use to decode whatever it's coming from the open AI stream

    let counter = 0

    const response = await fetch('https://api.openai.com/v1/chat/completions', { //again this is from open ai documentation
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
        },
        body: JSON.stringify(payload)  //this is the payload that we are passing into this function from route.ts for message - that's where we call this function and pass the payload in there
    })
    const stream = new ReadableStream({
        async start(controller) {  //start and controller are already reserved from ReadableStream, we did not make it up

            const onParse = (event: ParsedEvent | ReconnectInterval) => {
                // for this we downloaded eventsource-parser because 
                // you can feed it with chunks of data because that is what we actually get from open AI - nothing but chunks of strings
                // It takes the data you give it, looks at it carefully, and when it figures out a complete set of data that makes sense, it sends you a message with the information it found.
                // ParsedEvent | ReconnectInterval are coming from the library that we just imported = eventsource-parser

                if (event.type === 'event') {
                    const data = event.data
                    // https://beta.openai.com/docs/api-reference/completions/create#completions/create-stream
                    if (data === '[DONE]') { //when the event is done we get a specific syntax back which is [DONE]
                        controller.close()  // if this is done then we want to close this whole readable stream and this is how we do it
                        return  // then you need to return to stop any further excecution of the code 
                    }

                    //if the data is not done and there is an actual readable stream  we want to read - we have to wrapt it in try catch as there might happen error along the way and we want to handle that
                    try {
                        // here is how we will handle the data
                        const json = JSON.parse(data) // first you want to parse the data we are getting
                        // now we will convert the data into a regular string
                        const text = json.choices[0].delta?.content || ''  // we have to put empty string, in case we get undefined which is very possible. this is just the syntax for turning the data into regular string


                        // if the text is a prefixed character (for ex. a new line) then we do not want to do anything
                        if (counter < 2 && (text.match(/\n/) || []).length) {  //text.match(/\n/)  this mean a new line
                            return  // you do not want to do anything
                        }

                        // encoding our text
                        const queue = encoder.encode(text)
                        controller.enqueue(queue) //now you want to enqueue it into our controller

                        counter++  //here you need to increment our counter 

                    } catch (error) {
                        controller.error(error)
                    }
                }
            }

            const parser = createParser(onParse)

            // the response.body we get back from the fetch request is going to contain a  readable stream (because we set it to be true in the payload) and we can split it in certain chunks
            for await (const chunk of response.body as any) {
                // now we can feed out parser with it
                parser.feed(decoder.decode(chunk))
            }

        }
    })

    return stream
  }