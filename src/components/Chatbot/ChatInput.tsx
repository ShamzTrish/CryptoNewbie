
// here I create textArea for our input and then we send the content to the API route with react Query
// // in the second step we have to get readable strem of strings from the API

"use client"
import { MessagesContext } from '@/context/messages'
import { cn } from '@/lib/utils'
import { Message } from '@/lib/validators/message'
import { useMutation } from '@tanstack/react-query'
import { CornerDownLeft, Loader2 } from 'lucide-react'
import { nanoid } from 'nanoid'
import { FC, HTMLAttributes, useContext, useRef, useState } from 'react'
import { toast } from 'react-hot-toast'
import TextareaAutosize from 'react-textarea-autosize'

interface ChatInputProps extends HTMLAttributes<HTMLDivElement> { }

const ChatInput: FC<ChatInputProps> = ({ className, ...props }) => {
    const [inputValue, setInputValue] = useState<string>('')

    const { messages, addMessage, removeMessage, updateMessage, setIsMessageUpdating } = useContext(MessagesContext)

    const textareaRef = useRef<null | HTMLTextAreaElement>(null)

    const { mutate: sendMessage, isLoading } = useMutation({
        mutationFn: async (message: Message) => {
            const response = await fetch('/api/message', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ messages: [message] })
            })

            if (!response.ok) {
                throw new Error()
            }

            return response.body
        },
        onMutate(message) {
            addMessage(message)
        },

        //he I want to dispay the readable stream back to the client in realt-time
        onSuccess: async (stream) => {

            if (!stream) {
                throw new Error('No stream Found.')
            }

            const id = nanoid()
            const responseMessage: Message = {
                id,
                isUserMessage: false,
                text: '',
            }

            addMessage(responseMessage)

            setIsMessageUpdating(true)

            const reader = stream.getReader()
            const decoder = new TextDecoder()

            let done = false

            while (!done) {
                const { value, done: doneReading } = await reader.read()
                done = doneReading
                const chunkValue = decoder.decode(value)
                updateMessage(id, (prev) => prev + chunkValue)
            }

            setInputValue('')
            setIsMessageUpdating(false)

            setTimeout(() => {
                textareaRef.current?.focus()
            }, 10)
        },
        onError(_, message) {
            toast.error('Something went wrong! Please try again.')
            removeMessage(message.id)
            textareaRef.current?.focus()
        },
    }
    )

    return (
        <div {...props} className={cn('border-t border-zinc-300', className)}>
            ChatInput
            <div className='relative mt-4 flex-1 overflow-hidden rounded-lg border-none outline-none'>
                <TextareaAutosize
                    ref={textareaRef}
                    rows={2}
                    maxRows={4}
                    autoFocus
                    onKeyDown={(event) => {
                        if (event.key === 'Enter' && !event.shiftKey) {
                            event.preventDefault()
                            const message: Message = {
                                id: nanoid(),
                                isUserMessage: true,
                                text: inputValue
                            }
                            sendMessage(message)
                        }
                    }}
                    value={inputValue}
                    onChange={(event) => setInputValue(event.target.value)}
                    placeholder='Write a message...'
                    className='peer disabled:opacity-50 pr-14 resize-none block w-full border-0 bg-zinc-100 py-1.5 text-gray-900 focus:ring-0 text-sm sm:leading-6'
                />

                <div className='absolute inset-y-0 right-0 flex py-1.5 pr-1.5'>
                    <kbd className='inline-flex items-flex rounded border bg-white border-gray-200 px-1 font-sans text-xs text-gray-400'>
                        {
                            isLoading ? <Loader2 className='w-3 h-3 animate-spin' /> : <CornerDownLeft className='w-3 h-3' />
                        }
                    </kbd>
                </div>
                <div aria-hidden='true' className='absolute inset-x-0 bottom-0 border-t border-gray-300 peer-focus:border-t-2 peer-focus:border-indigo-600' />
            </div>
        </div>
    )
}

export default ChatInput
