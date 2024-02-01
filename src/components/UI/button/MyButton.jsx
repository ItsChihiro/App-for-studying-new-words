import React, { forwardRef } from 'react';
import './MyButton.scss'

const MyButton = forwardRef(({ children, ...props }, ref) => {
    return (
        <div>
            <button {...props} ref={ref} className='btn'>
                {children}
            </button>
        </div>
    );
});


export default MyButton;
