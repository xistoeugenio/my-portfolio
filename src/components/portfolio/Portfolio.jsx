import "./portfolio.scss";
import { Visibility, GitHub } from "@mui/icons-material";
import { projects, list, fullData, renderItemEmpty } from "../../data/dataPortfolio";
import { useEffect, useState } from "react";

export default function Portfolio() {
    const [selected, setSelected] = useState("all")
    const [data, setData] = useState([])

    useEffect(() => {
        switch (selected) {
            case "MERN":
                setData(projects.MERN);
                break
            case "react":
                setData(projects.react);
                break
            case "typescript":
                setData(projects.typescript);
                break
            default:
                setData(fullData)
        }

    }, [selected])

    return (
        <div className="portfolio">
            <h1>Portfolio</h1>
            <div className="mainContainer">
                <ul className="list">
                    {list.map(item => (
                        <li
                            key={item.id}
                            onClick={() => { setSelected(item.id) }}
                        >
                            {item.title}
                        </li>
                    ))}
                </ul>
                <div className="container">
                    {data.map(d => (
                        <div className='item' key={d.id}>
                            <img
                                src={d.img}
                                alt=""
                            />
                            <div className="info">

                                <h3>{d.title}</h3>
                                <nav>
                                    <a href={d.github} className="link github" target="blank">
                                        <GitHub className="icon" />
                                    </a>
                                    <a href={d.preview} className="link" target="blank">
                                        <Visibility className="icon" />
                                    </a>
                                </nav>

                            </div>
                        </div>
                    ))}
                    {renderItemEmpty(6 - (data.length))}
                </div>
            </div>
        </div>
    )
}
