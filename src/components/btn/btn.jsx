import './btn.css'

export default function Btn(props) {
    return (
        <div className="btn_main">
            <button style={{ backgroundColor: { ...props.color } }} className="btn" id={props.id} onClick={props.func}>
                {props.text}
            </button>
        </div>
    )
}