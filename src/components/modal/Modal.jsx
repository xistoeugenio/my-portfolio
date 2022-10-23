import { Close } from "@mui/icons-material"
import { useState } from "react"
import "./modal.scss"


export default function Modal() {
    const [modal, setModal] = useState(false)
    return (
        <div className={modal ? "containerText modal" : "containerText"} >
            <Close className="iconClose" onClick={() => setModal(false)} />
            <img src="assets/xisto.jpg" alt="" />
            <div className="text">
                <h3 onClick={() => setModal(true)}>Hi, my name is Xisto.</h3>
                <p>
                    I'm passionate about technologies and games, so I started my studies to become
                    a programmer a few months ago to learn several technologies and improve myself
                    in what I most identify with.
                </p>
                <p>
                    Currently, I'm a full-stack programmer with some mini projects, usually on the <strong>MERN</strong> stack.
                </p>
            </div>
            <a href="#portfolio" onClick={() => setModal(false)}>main projects</a>
        </div>
    )
}
