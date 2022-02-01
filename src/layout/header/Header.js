import appBlackLogo from "../../assets/images/app-black-logo.svg";
import appWhiteLogo from "../../assets/images/app-white-logo.svg";
import "./Header.css";
import discordLogo from "../../assets/images/discord-logo.svg";
import twitterLogo from "../../assets/images/twitter-logo.svg";
import twitterWhiteLogo from "../../assets/images/twitter-logo-white.svg";
import discordWhiteLogo from "../../assets/images/discord-logo-white.svg";
import {FONT_COLORS} from "../../modules/home/scroll-container/ScrollContainer";

export default function Header({fontColor}) {
    return (
        <div className={"app-header"}>
            {fontColor === FONT_COLORS.WHITE ?
                <img src={appWhiteLogo} alt={"app-logo"}/> :
                <img src={appBlackLogo} alt={"app-logo"}/>}
            <div className={'right-content'}>
                {fontColor === FONT_COLORS.WHITE ?
                    <img src={twitterWhiteLogo} alt={"twitter-logo"}/> :
                    <img src={twitterLogo} alt={"twitter-logo"}/>
                }
                {fontColor === FONT_COLORS.WHITE ?
                    <img src={discordWhiteLogo} alt={"discord-logo"}/> :
                    <img src={discordLogo} alt={"discord-logo"}/>
                }
            </div>
        </div>
    );
}
