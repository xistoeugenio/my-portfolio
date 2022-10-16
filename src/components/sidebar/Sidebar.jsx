import {GitHub, Email, LinkedIn, Instagram} from "@mui/icons-material"
import "./sidebar.scss"

export default function Sidebar() {
  return (
    <div className="sidebar">
      <ul className="list">
        <li className="itemList">
          <GitHub className="icon"/>
        </li>
        <li className="itemList">
          <Email className="icon"/>
        </li>
        <li className="itemList">
          <LinkedIn className="icon"/>
        </li>
        <li className="itemList">
          <Instagram className="icon"/>
        </li>
      </ul>
    </div>
  )
}
