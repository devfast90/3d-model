import "./LightVideoScreen.scss";
import useWindowOnScrollRatio from "../../../shared/hooks/useOnWindowScrollRatio";
import Header1 from "../../../shared/components/header1/Header1";
import Header3 from "../../../shared/components/header3/Header3";
import {useEffect, useLayoutEffect, useState} from "react";
import useOnContentScroll from "../../../shared/hooks/useOnContentScroll";
import useWindowDimension from "../../../shared/hooks/useOnWindowDimension";
import {FONT_COLORS} from "../scroll-container/ScrollContainer";

export default function LightVideoScreen({scrollContainerHeight, setFontColor}) {
    const scrollRatio = useWindowOnScrollRatio({
        scrollContainerHeight, offsetSelector: ".light-video-screen"
    });

    useEffect(() => {
        if (scrollRatio > 0 && scrollRatio <1) {
            setFontColor(FONT_COLORS.WHITE);
        } else {
            setFontColor(FONT_COLORS.BLACK);
        }
    }, [scrollRatio]);

    return (
        <div className={"light-video-screen"}>
            <div className={'circle-second-part-container'}>
                <div className="video-container">
                    <video
                        className={'square-video'}
                        src={'videos/moving-lights.mp4'}
                        loop
                        autoPlay
                        playsInline
                        muted
                    ></video>
                </div>
                <div className={'side-text-content'}>
                    {scrollRatio >= 0 && <Header1 className={"actor-text-content text-open-animation"}>
                        Who do you want to be?
                    </Header1>}
                    {(scrollRatio >= 0 && scrollRatio < 0.33) &&
                    <Header3 className={"actor-text-content text-open-animation"}>
                        Six avatar<br/>archetypes.<br/>
                    </Header3>}
                    {(scrollRatio >= 0.33 && scrollRatio <= 0.66) &&
                    <Header3 className={"actor-text-content text-open-animation"}>
                        <br/>10k Bad Influencers.<br/>
                    </Header3>}
                    {scrollRatio > 0.66 && <Header3 className={"actor-text-content text-open-animation"}>
                        All want to be<br/>‘Metaverse
                        famous’
                    </Header3>}
                </div>
            </div>
        </div>
    );
}
