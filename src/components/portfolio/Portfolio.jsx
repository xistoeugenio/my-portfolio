import "./portfolio.scss";
import { Visibility, GitHub } from "@mui/icons-material";
import { projects, list } from "../../data/dataPortfolio";
import { useEffect, useState } from "react";

export default function Portfolio() {
    const [selected, setSelected] = useState("all")
    const [data, setData] = useState([])

    /*
    useEffect(() => {
        
        for (let item in projects) {
            var fullData = []
            projects[item].map(i => fullData = [...fullData, { i }])
        }
        setData(fullData)
    }, [])
*/
    /*teste */
    useEffect(() => {
        switch (selected) {
            case "MERN":
                setData(projects.MERN);
                break
            default:
                setData(projects.all)
        }
    }, [selected, data])



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
                        <div className='item'>
                            <img
                                src={d.img}
                                alt=""
                            />
                            <div className="info">

                                <h3>{d.title}</h3>
                                <nav>
                                    <a href="/" className="github">
                                        <GitHub className="icon" />
                                    </a>
                                    <a href="/" className="preview">
                                        <Visibility className="icon" />
                                    </a>
                                </nav>

                            </div>
                        </div>
                    ))}
                    <div className="item empty">
                        <h3>coming soon...</h3>
                    </div>
                    <div className="item empty">
                        <h3>coming soon...</h3>
                    </div>
                    <div className="item empty">
                        <h3>coming soon...</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}
