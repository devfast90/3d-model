import footerBlackLogo from '../../../assets/images/footer-black-logo.svg';
import './Footer.css';

export default function Footer(){
    return <div className={'app-footer'}>
        <img src={footerBlackLogo} alt={'footer-logo'}/>
    </div>
}
