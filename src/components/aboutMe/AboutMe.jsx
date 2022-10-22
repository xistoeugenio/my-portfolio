import FlippableCard from "../flippableCard/FlippableCard"
import "./aboutMe.scss"

export default function AboutMe() {
    return (
        <div className="aboutMe">
            <h1>About me</h1>
            <div className="mainContainer">
                <div className="containerImg">
                    <FlippableCard />
                </div>
                <div className="containerText">
                    <div className="text">
                        <h3>Hi, my name is Xisto.</h3>
                        <p>
                            I'm passionate about technologies and games, so I started my studies to become
                            a programmer a few months ago to learn several technologies and improve myself
                            in what I most identify with.
                        </p>
                        <p>Currently, I'm a full-stack programmer with some mini projects, usually on the <strong>MERN</strong> stack.</p>
                    </div>
                    <a href="#portfolio">main projects</a>
                </div>
            </div>
        </div>
    )
}
