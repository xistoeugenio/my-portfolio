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
            <h3>XISTO</h3>
            <Sidebar row={true} className="row" />
            <nav className={open ? "responsive_nav" : ""} >
                <a href="#home" onClick={hideMenu}>Home</a>
                <a href="#about" onClick={hideMenu}>About me</a>
                <a href="#portfolio" onClick={hideMenu}>My projects</a>
                <a href="#contact" onClick={hideMenu}>Contact me</a>
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
