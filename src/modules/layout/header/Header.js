import appBlackLogo from '../../../assets/images/app-black-logo.svg';
import oxLogo from '../../../assets/images/header-ox-logo.svg';
import './Header.css';

export default function Header(){
    return <div className={'app-header'}>
        <img src={appBlackLogo} alt={'app-logo'}/>
        <img src={oxLogo} alt={'o-x-logo'}/>
    </div>
}
