import React, { forwardRef } from 'react';
import './Input.scss';

const Input = forwardRef(({ value, isError, ...props }, ref) => {
    let inputClass = `input`
    if (value === '') inputClass += ` input_red`;

    return (
        <input type="text" ref={ref} value={value} className={inputClass} {...props}>
        </input>
    )
});

export default Input;