import "./barProgress.scss"
import "react-step-progress-bar/styles.css";
import { ProgressBar, Step } from "react-step-progress-bar";
import { Check } from "@mui/icons-material";

export default function BarProgress({ percent }) {
    return (
        <ProgressBar
            percent={percent}
            filledBackground= "#061722"
        >
            <Step transition="scale">
                {({ accomplished }) => (
                    <div
                        className="step"
                        width="30"
                    >
                        {accomplished ? <Check className="icon"/> : <span> 1</span>}
                    </div>
                )}
            </Step>
            <Step transition="scale">
                {({ accomplished }) => (
                    <div
                        className="step"
                        width="30"
                    >
                        {accomplished ? <Check className="icon"/> : <span> 2</span>}
                    </div>
                )}
            </Step>
            <Step transition="scale">
                {({ accomplished }) => (
                    <div
                        className="step"
                        width="30"
                    >
                        {accomplished ? <Check className="icon"/> : <span> 3</span>}
                    </div>
                )}
            </Step>
        </ProgressBar>
    );
}
