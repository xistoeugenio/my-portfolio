import "./navbar.scss"
import { Dehaze, Close } from "@mui/icons-material";
import { useState } from "react";

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
