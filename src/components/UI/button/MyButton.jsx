import React, { useState } from 'react';
import './MyButton.scss'

export default function MyButton({ children, ...props }) {
    // const [pressed, setPressed] = useState(false)
    // const handlePress = () => {
    //     setPressed(!pressed)
    // }
    return (
        <div>
            <button {...props} className='btn'>
                {children}
            </button>
        </div>
    );
}

