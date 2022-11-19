import React from 'react'

export default function ApiResponse({ name, email, type, content }) {
    return (
        <>
            {type === "error" ?
                <>
                    <p className='error'>
                        {content === "Network Error" ?
                            `There is a problem with our server, but don't worry, I'm already working 
                        on fixing it and until then, you can contact me via email` :
                            content}
                    </p>
                    <a href="mailto:xistoeugeniosilva1@gmail.com">Email</a>
                </>
                :
                <>
                    <p className='success'>
                        Hello <strong>{name},</strong> I received your message,
                        stay turned on the <strong>{email}</strong> and as soon as possible I wil reply
                    </p>
                    <a href="/">Home</a>
                </>}
        </>
    )
}
