import './Footer.scss'
import MyButton from '../UI/button/MyButton';

export default function Footer(props) {
    return (
        <footer>
            <div>
                <MyButton>Режим тренировки</MyButton>
            </div>
            <div className='footer-info'>
                <div className="logo">
                    <img src="#" alt="logo" />
                </div>
                <div className="copyright">
                    <p>Copyright &copy; 2024</p>
                </div>
            </div>
        </footer>
    );
}