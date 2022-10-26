import "./form.scss"

export default function Form({ type, setStep}) {
    return (
        <div className={`form ${type}`}>
            <div className="inputs">
                <input type="text" placeholder="name" className="name" />
                <input type="email" placeholder="email" className="email" />
                <input type="text" placeholder="your message" className="message" />
            </div>
            <div className="buttons">
                <button className="previous" onClick={()=>{setStep(1)}}>
                    previous
                </button>
                <button className="next" onClick={()=>{setStep(2)}}>
                    next
                </button>
                <button className="submit" onClick={()=>{setStep(3)}} >
                    submit
                </button>
            </div>
            <div className="finishedContainer">

            </div>
        </div>
    )
}
