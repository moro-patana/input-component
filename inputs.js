import React from "react"

function Input(props) {
    let classNames = props.helperText ? `input input-${props.helperText}` : 'input';
    if (props.error) {
        classNames = `${classNames} input-${props.error}`
    }

    if (props.size) {
        classNames = `${classNames} input-${props.size}`
    }
    if (props.value) {
        classNames = `${classNames} input-${props.value}`
    }
    return (
            <input className={classNames} disabled={props.disabled} placeholder={props.placeholder} />
    )

}
export default Input;