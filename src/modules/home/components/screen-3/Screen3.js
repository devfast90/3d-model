import Header from "../../../layout/header/Header";
import Footer from "../../../layout/footer/Footer";
import SideText from "../../../layout/side-text/SideText";
import Header1 from "../../../shared/header1/Header1";
import './Screen3.css';
import {useCallback, useEffect, useRef} from "react";

export default function Screen3(){
    const onWindowScroll = useCallback((event)=>{
        console.log('Scroll Event', event);
    },[]);

    useEffect(()=>{
        window.addEventListener('scroll', onWindowScroll);
        return ()=>{window.removeEventListener('scroll', onWindowScroll)}
    },[]);

    return <div className={'screen3'}>
        <Header />
        <SideText />
        <div className={'text-container'}>
            <div>
                <Header1 className={'text-content1'}>
                    Be weird, dumb, sexy, broken, whatever. Just not f&$!#g boring.
                </Header1>
                <Header1 className={'text-content2'}>
                    Second Content
                </Header1>
                <Header1 className={'text-content3'}>
                    Third Content
                </Header1>
            </div>
            <div className={'image-modal'}>
            </div>
        </div>
        <div className={'scroll-contents'}>
            <div className={'scroll-content1'} />
            <div className={'scroll-content2'} />
            <div className={'scroll-content3'} />
        </div>
        <Footer />
    </div>
}
