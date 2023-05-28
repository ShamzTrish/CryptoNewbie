'use client'

import { Message } from "@/lib/validators/message"
import { nanoid } from "nanoid"
import { ReactNode, createContext, useState } from "react"



export const MessagesContext = createContext<{
    messages: Message[]
    isMessageUpdating: boolean
    addMessage: (message: Message) => void
    removeMessage: (id: string) => void
    updateMessage: (id: string, updateFn: (prevText: string) => string) => void
    setIsMessageUpdating: (isUpdating: boolean) => void
}>({
    messages: [],
    isMessageUpdating: false,
    addMessage: () => { },
    removeMessage: () => { },
    updateMessage: () => { },
    setIsMessageUpdating: () => { },
})

export const MessageProvider = ({ children }: { children: ReactNode }) => {

    const [isMessageUpdating, setIsMessageUpdating] = useState<boolean>(false)

    const [messages, setMessages] = useState<Message[]>([
        {
            id: nanoid(),
            text: "Hello, how can i help you?",
            isUserMessage: false,
        }
    ])

    const addMessage = (message: Message) => {
        setMessages((prev) => [...prev, message])

    }

    const removeMessage = (id: string) => {
        setMessages((prev) => {
            return prev.filter((message) => {
                message.id !== id
            })
        })
    }
    // tady pouzivame callback function aby jsme se nam text pridaval do existujici string misto toho aby nam chodili jenom chunks of strings
    const updateMessage = (id: string, updateFn: (prevText: string) => string) => {
        setMessages((prev) => {
            return prev.map((message) => {
                if (message.id === id) {
                    return { ...message, text: updateFn(message.text) }
                } else {
                    return message
                }
            })
        })
    }

    return <MessagesContext.Provider value={{
        messages,
        isMessageUpdating,
        addMessage,
        removeMessage,
        updateMessage,
        setIsMessageUpdating

    }}>{children}</MessagesContext.Provider>
}

