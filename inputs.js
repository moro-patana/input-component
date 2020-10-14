import React from "react"

function Input(props) {
    let classNames = props.helperText ? `input input-${props.helperText}` : 'input';
    if (props.error) {
        classNames = `${classNames} input-error`
    }

    if (props.size) {
        classNames = `${classNames} input-${props.size}`
    }
    if (props.disabled) {
        classNames = `${classNames} input-disabled`
    }
    if (props.startIcon) {
        classNames = `${classNames} input-startIcon`
    }
    if (props.endIcon) {
        classNames = `${classNames} input-endIcon`
    }
    if (props.value) {
        classNames = `${classNames} input-${props.value}`
    }
    if (props.fullwidth) {
        classNames = `${classNames} input-fullwidth`
    }
    if (props.multiline) {
        classNames = `${classNames} input-multiline`
    }



    return (
            <input 
            className={classNames} 
            value={props.value}
            placeholder={props.placeholder} />
    )

}
export default Input;