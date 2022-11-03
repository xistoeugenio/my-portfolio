import React from 'react'

export default function ApiResponse({ name, email, type, content }) {
    return (
        <>
            {type === "error" ?
                <p className='error'>
                    {content === "Network Error" ?
                        `I'm having some problems hosting my node js application.
                         But don't worry I'm already working to solve it
                          and until then you can contact me by email.` :
                        content}
                </p> :
                <p className='success'>
                    Hello, <strong>{name}</strong> I received your message,
                    stay turned on the <strong>{email}</strong> and as soon as possible I wil reply
                </p>}
        </>
    )
}
