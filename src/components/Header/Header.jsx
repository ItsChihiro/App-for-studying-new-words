import './Header.scss'

export default function Header(props) {
    return (
        <header>
            <div className="first-block header__block">
                <div className="logo">
                    <img src="#" alt="logo" />
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
