

export default function Svg({ percent }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" 
        version="1.1" 
        width="60px"
        height="60px"
        >
            <defs>
                <linearGradient id="GradientColor">
                    <stop offset="0%" stop-color="#e91e63" />
                    <stop offset="100%" stop-color="#673ab7" />
                </linearGradient>
            </defs>
            <circle cx="30" cy="30" r="25"
                stroke-linecap="round"
                strokeDashoffset={154 - (154 * (percent / 100))} />
        </svg>
    )
}
