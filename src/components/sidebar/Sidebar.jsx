import { GitHub, Email, LinkedIn, Instagram } from "@mui/icons-material"
import { useState } from "react"
import ModalInstagram from "../modalInstagram/ModalInstagram"
import "./sidebar.scss"

export default function Sidebar({ row }) {
  const [showModal, setShowModal] = useState(false)

  return (
    <div className={row ? "sidebar row" : "sidebar"}>
      <ul className="list">
        <li className="itemList">
          <a href="https://github.com/xistoeugenio" target="blank">
            <GitHub className="icon" />
          </a>
        </li>
        <li className="itemList">
          <a href="mailto:xistoeugeniosilva1@gmail.com" target="blank">
            <Email className="icon" />
          </a>
        </li>
        <li className="itemList">
          <a href="https://www.linkedin.com/in/xisto-eugênio-266029171/" target="blank">
            <LinkedIn className="icon" />
          </a>
        </li>
        <li className="itemList" onClick={()=>{setShowModal(true)}}>
          <Instagram className="icon"/>
        </li>
      </ul>
      {showModal && <ModalInstagram setShowModal = {setShowModal}/>}
    </div>
  )
}
