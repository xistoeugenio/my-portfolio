import "./barProgress.scss"
import "react-step-progress-bar/styles.css";
import { ProgressBar, Step } from "react-step-progress-bar";

export default function BarProgress() {
    return (
        <ProgressBar
            percent={59}
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
                        2
                    </div>
                )}
            </Step>
        </ProgressBar>
    );
}
