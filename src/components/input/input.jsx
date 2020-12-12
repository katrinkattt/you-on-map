// import React from 'react'
// import { RouteProps } from 'react-router'
import './input.css';
// type Props ={
//     label: string,
//     type: string,
//     placeholder: string,
//     idInput: string
// }
export default function Input(props) {
    return (
        <div className="main_input">
            <label>{props.label}</label>
            <input type={props.type} placeholder={props.placeholder} id={props.idInput} />
        </div>
    )
}