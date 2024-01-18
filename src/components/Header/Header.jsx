import './Header.scss'
import logo from '../../assets/images/logo.png'
import { Link } from 'react-router-dom';

export default function Header() {
    let isLogin = false;

    return (
        <header className='header'>
            <div className="header__container">
                <nav className='header__nav'>
                    <ul className="left-block">
                        <li>
                            <Link to="/" className='logo'><img src={logo} alt="logo" className="logo-img" />App</Link>
                        </li>
                    </ul>

                    <ul className="middle-block">
                        <li>
                            <Link to='/game' className="game">Flashcards</Link>
                        </li>
                    </ul>

                    <ul className="right-block">
                        {isLogin
                            ? <li className="logout">
                                <a href="#" className="logout-link">Log Out</a>
                            </li>
                            : <li className="login">
                                <a href="#" className="login-link">Log In</a>
                            </li>
                        }
                    </ul>
                </nav>
            </div>
        </header>
    );
}
