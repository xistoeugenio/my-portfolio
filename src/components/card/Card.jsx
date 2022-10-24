import './flipTransition.css';
import './card.scss'
import CircleProgress from '../circleProgress/CircleProgress';
import { useState } from 'react';

export default function Card({ onClick }) {

    const [animation, setAnimation] = useState(false)

    return (
        <div className='card' onClick={onClick}>
            <div className="cardBack" onClick={()=>setAnimation(false)}>
                <CircleProgress 
                animation={animation}
                percent = {53}
                />
            </div>
            <div className="cardFront" onClick={()=>setAnimation(true)}></div>
        </div>
    )
}