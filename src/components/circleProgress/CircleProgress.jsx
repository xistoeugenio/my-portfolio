import { useEffect, useState } from "react"
import "./circleProgress.scss";
import Svg from "./Svg";

export default function CircleProgress({ animation, percent }) {

    const [counter, setCounter] = useState(0)

    useEffect(() => {
        if (animation) {
            if (counter < percent) {
                let timer = setInterval(() => {
                    setCounter((prev) => prev + 1);
                }, 24)

                return () => clearInterval(timer)
            }
        } else {
            setCounter(0)
        }
    }, [counter, animation, percent])

    return (
        <div className={animation ? "skill animation" : "skill"}>
            <div className="outer">
                <div className="inner">
                    <p>{counter}%</p>
                </div>
            </div>
            <Svg percent = {percent} />
        </div>
    )
}
