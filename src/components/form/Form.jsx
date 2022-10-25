import "./form.scss"

export default function Form({type}) {
  return (
    <div className={`form ${type}`}>
        <div className="inputs">
            <input type="text" placeholder="name" className="name"/>
            <input type="email" placeholder="email" className="email"/>
            <input type="text" placeholder="your message" className="message"/>
        </div>
        <div className="buttons">
            <button className="previous">
                previous
            </button>
            <button className="next">
                next
            </button>
            <button className="submit" >
                submit
            </button>
        </div>
        <div className="finishedContainer">
            
        </div>
    </div>
  )
}
