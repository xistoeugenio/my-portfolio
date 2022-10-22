import './flipTransition.css';
import './card.scss'

export default function Card({ onClick }) {
    return (
        <div className='card' onClick={onClick}>
            <div className="cardBack">
                back
            </div>
            <div className="cardFront">
                hei
            </div>
        </div>
    )
}