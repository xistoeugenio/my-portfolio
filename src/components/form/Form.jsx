import "./form.scss"

export default function Form({setStep, step }) {
    return (
        <div className="form " style={{ transform: `translateX(-${(step * 500) - 500}px)` }}>
            <div className="sectionForm">
                <form className="inputs">
                    <input type="text" placeholder="name" className="name" />
                    <input type="email" placeholder="email" className="email" />
                    <input type="tel" placeholder="phone(optional)"/>
                </form>
                <div className="buttons">
                    <button className="next" onClick={() => { setStep(2) }}>
                        next
                    </button>
                </div>
            </div>
            <div className="sectionForm">
                <form className="inputs">
                    <input type="text" placeholder="your message" className="message" />
                </form>
                <div className="buttons">
                    <button className="previous" onClick={() => { setStep(1) }}>
                        previous
                    </button>
                    <button className="submit" onClick={() => { setStep(3) }} >
                        submit
                    </button>
                </div>
            </div>
            <div className="sectionForm">
                <div className="finisheContainer">
                    hey there this is the end
                </div>
            </div>
        </div>
    )
}
