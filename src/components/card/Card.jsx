import './flipTransition.css';
import './card.scss'
import CircleProgress from '../circleProgress/CircleProgress';
import { useState } from 'react';

export default function Card({ onClick }) {

    const [animation, setAnimation] = useState(false)

    return (
        <div className='card' onClick={onClick}>
            <div className="cardBack" onClick={() => setAnimation(false)}>
                <ul className='skillList'>
                    <li className='skillItem'>
                        <CircleProgress animation={animation} percent={74} />
                        <p className='skillName'>HTML & CSS</p>
                    </li>
                    <li className='skillItem'>
                        <CircleProgress animation={animation} percent={69} />
                        <p className='skillName'>Javascript</p>
                    </li>
                    <li className='skillItem'>
                        <CircleProgress animation={animation} percent={65} />
                        <p className='skillName'>MERN stack</p>
                    </li>
                    <li className='skillItem mysql'>
                        <CircleProgress animation={animation} percent={57} />
                        <p className='skillName'>MYSQL</p>
                    </li>
                    <li className='skillItem git'>
                        <CircleProgress animation={animation} percent={53} />
                        <p className='skillName'>GIT</p>
                    </li>
                </ul>
                <a href="https://www.devmedia.com.br/perfil/xisto-eugenio" target="blank" className='certificate'>My certificates</a>
            </div>
            <div className="cardFront" onClick={() => setAnimation(true)}></div>
        </div>
    )
}