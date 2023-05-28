import { NextRequest, NextResponse } from "next/server";
import { rateLimiter } from "./lib/rate-limiter";

// by this code we want to make sure that we handle a possibility of someone trying to spam our chat by quickly sending a messages

export const middleware = async (req: NextRequest) => {
    const ip = req.ip ?? '127.0.0.1'

    try {
        const {success} = await rateLimiter.limit(ip)
        if(!success) return new NextResponse('You are writing messages to fast!')

        return NextResponse.next()
    } catch (error) {
        return new NextResponse('Sorry, sometihing went wrong proccessing your message. Please try again!')
    }
}

// this will define every path where middleware will run
export const config = {
    matcher: '/api/message/:path*'
}

