import Header from "../../../layout/header/Header";
import Footer from "../../../layout/footer/Footer";
import SideText from "../../../layout/side-text/SideText";

import Header1 from "../../../shared/header1/Header1";

export default function Screen3(){
    return <div>
        <Header />
        <SideText />
        <Header1>
            Be weird, <br/>
            dumb, sexy, <br/>
            broken, <br/>
            whatever. <br/>
            Just not f&$!#g  <br/>
            boring.
        </Header1>
        <Footer />
    </div>
}
