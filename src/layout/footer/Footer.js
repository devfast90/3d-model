import "./Footer.scss";
import oxLogo from "../../assets/images/header-ox-logo.svg";
import oxWhiteLogo from "../../assets/images/header-ox-logo-white.svg";
import {FONT_COLORS} from "../../modules/home/scroll-container/ScrollContainer";

export default function Footer({fontColor}) {
  return (
    <div className={"app-footer"}>
        {fontColor === FONT_COLORS.WHITE ?
            <img src={oxWhiteLogo} alt={"o-x-logo"} /> :
            <img src={oxLogo} alt={"o-x-logo"} />
        }
    </div>
  );
}
