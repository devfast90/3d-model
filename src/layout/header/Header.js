import appBlackLogo from "../../assets/images/app-black-logo.svg";
import "./Header.css";
import discordLogo from "../../assets/images/discord-logo.svg";
import twitterLogo from "../../assets/images/twitter-logo.svg";

export default function Header() {
  return (
    <div className={"app-header"}>
      <img src={appBlackLogo} alt={"app-logo"} />
        <div className={'right-content'}>
            <img src={twitterLogo} alt={"twitter-logo"} />
            <img src={discordLogo} alt={"discord-logo"} />
        </div>
    </div>
  );
}
