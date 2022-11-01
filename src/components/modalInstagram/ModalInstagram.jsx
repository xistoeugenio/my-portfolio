import "./modalInstagram.scss"

export default function ModalInstagram({ setShowModal }) {
    return (
        <div className='modalInstagram'>
            <main className="modalContainer">
                <p>I don't have an Instagram account yet, I hope you guys understand :)</p>
                <button onClick={() => { setShowModal(false) }}>
                    Understood
                </button>
            </main>
        </div>
    )
}
