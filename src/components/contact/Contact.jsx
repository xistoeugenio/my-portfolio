
import Form from "../form/Form"
import BarProgress from "../progressBar/BarProgress";
import "./contact.scss"

export default function Contact() {
  return (
    <div className="contact">
      <div className="progressBar">
        <BarProgress />
      </div>
      <Form type="msg" />
    </div>
  )
}
