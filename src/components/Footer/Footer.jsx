import './Footer.scss'
import MyButton from '../UI/button/MyButton';
import logo from '../../assets/images/logo.png'

export default function Footer(props) {
    return (
        <footer>
            <div className='buttons'>
                <MyButton>Режим тренировки</MyButton>
            </div>
            <div className='footer-info'>
                <div>
                    <a href="#"><img src={logo} alt="logo" className="logo" /></a>
                </div>
                <div className="copyright">
                    <p>Copyright &copy; 2024</p>
                </div>
            </div>
        </footer>
    );
}