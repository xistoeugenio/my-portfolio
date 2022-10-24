import { useEffect, useState } from "react"
import "./circleProgress.scss"
import "./animations.scss"

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

    console.log(counter)

    return (
        <div className={animation ? `skill percent${percent}` : "skill"}>
            <div className="outer">
                <div className="inner">
                    <p>
                        {counter}%
                    </p>
                </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
                <defs>
                    <linearGradient id="GradientColor">
                        <stop offset="0%" stop-color="#e91e63" />
                        <stop offset="100%" stop-color="#673ab7" />
                    </linearGradient>
                </defs>
                <circle cx="80" cy="80" r="70" stroke-linecap="round" />
            </svg>
        </div>
    )
}
