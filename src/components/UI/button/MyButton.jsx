import React from 'react';
import './MyButton.scss'

export default function MyButton({ children, ...props }) {
    return (
        <div>
            <button {...props} disabled={true} className='btn'>
                {children}
            </button>
        </div>
    );
}

