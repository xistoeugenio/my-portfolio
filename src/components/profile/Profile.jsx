import { KeyboardDoubleArrowDown } from "@mui/icons-material";
import "./profile.scss";

export default function Profile() {
  return (
    <div className="profile">
        <div className="profileContainer">
            <div className="imgContainer">
                <img src="assets/xisto.jpg" alt="" />
            </div>
            <div className="textContainer">
                <h1>Hi, I am Xisto Eugênio</h1>
                <span>and I am a front-end developer</span>
            </div>
        </div>
        <a href="/">
          <KeyboardDoubleArrowDown className='icon' />
        </a>
    </div>
  )
}
