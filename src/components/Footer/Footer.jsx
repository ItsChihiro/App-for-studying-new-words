import './Footer.scss'
import logo from '../../assets/images/logo.png'
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer>
            <div className='footer-info'>
                <div>
                    <Link to="/"><img src={logo} alt="logo" className="logo-img" /></Link>
                </div>
                <div className="copyright">
                    <p>Copyright &copy; 2024</p>
                </div>
            </div>
        </footer>
    );
}