import './Header.scss'
import logo from '../../assets/images/logo.png'

export default function Header(props) {
    return (
        <header>
            <div className="first-block header__block">
                <div>
                    <a href="#"><img src={logo} alt="logo" className="logo" /></a>
                </div>
                <div className="login">
                    <a href="#" className="login-link">Log In</a>
                </div>
            </div>
            <div className="second-block header__block">
                <div className="logout">
                    <a href="#" className="logout-link">Log Out</a>
                </div>
            </div>
        </header>
    );
}
