import "./barProgress.scss"
import "react-step-progress-bar/styles.css";
import { ProgressBar, Step } from "react-step-progress-bar";

export default function BarProgress({percent}) {
    return (
        <ProgressBar
            percent={percent}
            filledBackground="linear-gradient(to right, #fefb72, #f0bb31)"
        >
            <Step transition="scale">
                {({ accomplished }) => (
                    <div
                        className="step"
                        style={{ backgroundColor: `${accomplished ? "gray" : "blue"}` }}
                        width="30"
                    >
                        2
                    </div>
                )}
            </Step>
            <Step transition="scale">
                {({ accomplished }) => (
                    <div
                        className="step"
                        style={{ backgroundColor: `${accomplished ? "gray" : "blue"}` }}
                        width="30"
                    >
                        {accomplished ? "hey": "opa"}
                    </div>
                )}
            </Step>
            <Step transition="scale">
                {({ accomplished }) => (
                    <div
                        className="step"
                        style={{ backgroundColor: `${accomplished ? "gray" : "blue"}` }}
                        width="30"
                    >
                        2
                    </div>
                )}
            </Step>
        </ProgressBar>
    );
}
