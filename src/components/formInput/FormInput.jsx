
import { useState } from "react"
import "./formInput.scss"

export default function FormInput(props) {
    const [focused, setFocused] = useState(false)
    const { label, handleChange, placeholder, name, errorMessage, required, pattern, type } = props

    const handleFocus = (e) => {
        setFocused(true)
    }
    return (
        <div className="formInput">
            <label htmlFor="email">{label}</label>
            <input
                placeholder={placeholder}
                name={name}
                onChange={handleChange}
                required={required}
                pattern={pattern}
                type={type}
                onBlur={handleFocus}
                focused={focused.toString()}
            />
            <span className="alert">{errorMessage}</span>
        </div>
    )
}
