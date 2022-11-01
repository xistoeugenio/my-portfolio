import { useState } from "react"
import FormInput from "../formInput/FormInput"
import { inputs } from "../../data/formData"
import "./form.scss"

export default function Form({ setStep, step }) {
    const translateX = (-step * 33.333)+ 33.333
    const [values, setValues] = useState({
        name: "",
        email: "",
        message: ""
    })

    const handleChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value })
    }

    const previous =(e)=>{
        e.preventDefault()
            setStep(1)
    }

    const next = (e) => {
        e.preventDefault();
        setStep(2)
    }

    return (
        <div className="form " style={{ transform: `translateX(${translateX}%)` }}>
            <form className="sectionForm " onSubmit={next}>
                <div className="inputs" >
                    {inputs.map((input) => (
                        <FormInput
                            key={input.id}
                            {...input}
                            value={values[input.name]}
                            handleChange={handleChange} />
                    ))}
                </div>
                <div className="buttons">
                    <button className="next">
                        next
                    </button>
                </div>
            </form>
            <form className="sectionForm">
                <div className="inputs">
                    <label>Your message</label>
                    <textarea 
                    required
                    name="message"
                    onChange={handleChange}></textarea>
                </div>
                <div className="buttons">
                    <button className="previous" onClick={previous}>
                        previous
                    </button>
                    <button className="submit">
                        submit
                    </button>
                </div>
            </form>
            <div className="sectionForm">
                <div className="finisheContainer">
                    hey there this is the end
                </div>
            </div>
        </div>
    )
}
