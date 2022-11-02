import React from 'react'

export default function ApiResponse({ name, email, type, content }) {
    return (
        <>
            {type === "error" ?
                <p className='error'>
                    {content === "Network Error" ?
                        "there's a problem with our server, but don't you worry, I'm working to solve it ASAP." :
                        content}
                </p> :
                <p className='success'>
                    Hello, <strong>{name}</strong> I received your message,
                    stay turned on the <strong>{email}</strong> and as soon as possible I wil reply
                </p>}
        </>
    )
}
