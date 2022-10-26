
import { useEffect, useState } from "react";
import Form from "../form/Form"
import BarProgress from "../progressBar/BarProgress";
import "./contact.scss"

export default function Contact() {
  const [step, setStep] = useState(1)
  const [percent, setPercent] = useState()

  useEffect(() => {
    switch (step) {
      case 1:
        setPercent(0)
        break;
      case 2:
        setPercent(50)
        break;
      case 3:
        setPercent(100)
        break;
      default:
        break;
    }
  }, [step])

  return (
    <div className="contact">
      <div className="progressBar">
        <BarProgress percent={percent}/>
      </div>
      <div className="forms">
        <div className="slider" style={{ transform: `translateX(-${(step * 500) - 500}px)` }}>
          <Form type="info" setStep ={setStep}/>
          <Form type="msg" setStep ={setStep}/>
          <Form type="finished" setStep ={setStep}/>
        </div>

      </div>

    </div>
  )
}
