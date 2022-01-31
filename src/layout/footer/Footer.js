import "./Footer.css";
import oxLogo from "../../assets/images/header-ox-logo.svg";

export default function Footer() {
  return (
    <div className={"app-footer"}>
        <img src={oxLogo} alt={"o-x-logo"} />
    </div>
  );
}
