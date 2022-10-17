import "./navbar.scss"
import { Dehaze, Close } from "@mui/icons-material";
import { useState } from "react";
import Sidebar from "../sidebar/Sidebar";

export default function Navbar() {
    const [open, setOpen] = useState(false)

    const hideMenu = () => {
        if (open) {
            setOpen(false)
        }

    }
    return (
        <header className="navbar">
            <h3>LOGO</h3>
            <Sidebar row={true} className = "row"/>
            <nav className={open ? "responsive_nav": ""} >
                <a href="/#" onClick={hideMenu}>Home</a>
                <a href="/#" onClick={hideMenu}>My work</a>
                <a href="/#" onClick={hideMenu}>Blog</a>
                <a href="/#" onClick={hideMenu}>About me</a>
                <button onClick={hideMenu}>
                    <Close />
                </button>
            </nav>
            <button 
            className={"menu-btn " + (open && "hide")}
            onClick={() => setOpen(true)}>
                <Dehaze />
            </button>
        </header>
    )
}
