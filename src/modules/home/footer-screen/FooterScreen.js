import "./FooterScreen.scss";
import oxImage from '../../../assets/images/footer-screen/0-x.png';
import badInfluenceWhiteLogo from '../../../assets/images/footer-screen/BadInfluence_Logo.svg';
import footerWhiteLogo from '../../../assets/images/footer-screen/footer-white-logo.svg';
import twitterWhiteLogo from '../../../assets/images/footer-screen/twitter-white-logo.svg';
import Header3 from "../../../shared/components/header3/Header3";

export default function FooterScreen() {
    return (
        <div className={"footer-screen"}>
            <div className={'footer-screen-container'}>
                <Header3 className={'header-container'}>
                    COMING EARLY 2022
                </Header3>
                <div className={'logo-container'}>
                    <img src={badInfluenceWhiteLogo} alt={'bad influence'}/>
                </div>
                <div className={'footer-container'}>
                    <img src={oxImage} alt={'o-x'}/>
                    <div>
                        <img src={footerWhiteLogo} alt={'footer-logo'}/>
                        <img src={twitterWhiteLogo} alt={'twitter-logo'}/>
                    </div>
                    <div>
                        ©VEOPLE 2022
                    </div>
                </div>
            </div>
            <div className="video-container">
                <video src="videos/footer-video.mp4"
                    autoPlay loop playsInline muted></video>
            </div>
        </div>
    );
}
