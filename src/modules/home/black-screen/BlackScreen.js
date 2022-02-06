import "./BlackScreen.scss";
import useWindowOnScrollRatio from "../../../shared/hooks/useOnWindowScrollRatio";
import Header1 from "../../../shared/components/header1/Header1";
import quoteIcon3 from '../../../assets/images/quote-icon-3.svg';
import {useEffect} from "react";
import {FONT_COLORS} from "../scroll-container/ScrollContainer";
import useScreenType from "../../../shared/hooks/useScreenType";

export default function BlackScreen({scrollContainerHeight, setFontColor}) {
    const scrollRatio = useWindowOnScrollRatio({
        scrollContainerHeight,
        offsetSelector: ".black-screen"
    });
    const {isMobile} = useScreenType();

    useEffect(() => {
        if (scrollRatio > 0) {
            setFontColor(FONT_COLORS.WHITE);
        } else {
            setFontColor(FONT_COLORS.BLACK);
        }
    }, [scrollRatio]);

    const getTextScrollRatio = (scrollRatio)=>{
        return isMobile ? Math.min(scrollRatio * 2, 1): scrollRatio;
    };

    const getMediaScrollRatio = (scrollRatio)=>{
        return isMobile ? Math.min((scrollRatio - 0.5) * 2, 1): scrollRatio;
    };

    return (
        <div className={"black-screen"} style={{background: scrollRatio >= 0 ? "black" : "white"}}>
            <BlackScreenText scrollRatio={getTextScrollRatio(scrollRatio)} isMobile={isMobile}/>
            <BlackScreenMedia scrollRatio={getMediaScrollRatio(scrollRatio)} isMobile={isMobile}/>
        </div>
    );
}

function BlackScreenMedia({scrollRatio, isMobile}) {
    return ((isMobile && scrollRatio > 0) || !isMobile) && <>
        <div className={"mash"} style={{transform: `rotateY(${Math.min(scrollRatio, 1) * 75}deg)`}}/>
        <div className={"actor-image"}/>
        <div className={"actor-video"} style={{opacity: scrollRatio > 0.1 ? 1 : 0}}>
            <div className="video-container">
                <video
                    src="https://css-tricks-post-videos.s3.us-east-1.amazonaws.com/708209935.mp4"
                    autoPlay
                    loop
                    playsInline
                    muted
                ></video>
            </div>
        </div>
    </>;
}

function BlackScreenText({scrollRatio, isMobile}) {

    return ((isMobile && scrollRatio < 1) || !isMobile) && <div className={"text-container"}>
        <img src={quoteIcon3} alt={'quote-icon'}/>
        {scrollRatio < 0.25 && (
            <Header1 className={`text-open-animation`}>
                They might be a bit broken inside, but outside they’re perfection.
            </Header1>
        )}
        {scrollRatio > 0.25 && scrollRatio < 0.5 && (
            <Header1 className={`text-open-animation`}>
                All 6 archetypes have a single topology
            </Header1>
        )}
        {scrollRatio > 0.5 && scrollRatio < 0.75 && (
            <Header1 className={`text-open-animation`}>
                All attributes dynamically programmed to fit
            </Header1>
        )}
        {scrollRatio > 0.75 && (
            <Header1 className={`text-open-animation`}>
                Advanced face rigs (hint)
            </Header1>
        )}
    </div>
}
