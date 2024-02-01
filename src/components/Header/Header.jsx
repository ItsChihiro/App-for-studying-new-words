import './Header.scss'
import logo from '../../assets/images/logo.png'
import { Link, NavLink } from 'react-router-dom';

export default function Header() {
    let isLogin = false;

    return (
        <header className='header'>
            <div className="header__container">
                <nav className='header__nav'>
                    <ul className="left-block">
                        <li>
                            <NavLink to="/" className='logo'><img src={logo} alt="logo" className="logo-img" />App</NavLink>
                        </li>
                    </ul>

                    <ul className="middle-block">
                        <li>
                            <NavLink to='/game' className="game">Flashcards</NavLink>
                        </li>
                    </ul>

                    <ul className="right-block">
                        {isLogin
                            ? <li className="logout">
                                <Link to="#" className="logout-link">Log Out</Link>
                            </li>
                            : <li className="login">
                                <Link to="#" className="login-link">Log In</Link>
                            </li>
                        }
                    </ul>
                </nav>
            </div>
        </header>
    );
}
