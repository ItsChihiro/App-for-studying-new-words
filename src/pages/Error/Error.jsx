import React from 'react';
import { Link } from 'react-router-dom';
import './Error.scss'
import notFoundImg from '../../assets/images/404.png'
import MyButton from '../../components/UI/button/MyButton';

export default function Error() {
    return (
        <div className="wrapper">
            <div className="main-text">
                <img src={notFoundImg} alt="404 error" className="img-error" />
                <p>Page not found</p>
            </div>

            <Link to='/' >
                <MyButton>Go to Home</MyButton>
            </Link>
        </div>
    );
}

