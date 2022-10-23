
import FlippableCard from "../flippableCard/FlippableCard"
import Modal from "../modal/Modal"
import "./aboutMe.scss"

export default function AboutMe() {
    return (
        <div className="aboutMe">
            <h1>About me</h1>
            <div className="mainContainer">
                <div className="containerImg">
                    <FlippableCard />
                </div>
                <Modal />
            </div>
        </div>
    )
}
