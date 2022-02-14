import "./CircleScreen.scss";
import useWindowOnScrollRatio from "../../../shared/hooks/useOnWindowScrollRatio";
import {useLayoutEffect, useState} from "react";
import useOnContentScroll from "../../../shared/hooks/useOnContentScroll";
import useWindowDimension from "../../../shared/hooks/useOnWindowDimension";

const textContentsStrings = [
    'The iconic world of JOR ROSS, visionary artist of music, streetwear and pop culture.',
    'A wild roadmap to make bad influencers the stars of the Metaverse,',
    'Gamified by the lead writer of this years ASSASSIN’s CREED.',
    'Metaverse-ready avatars by world-class technical artists.',
    'Full commitment to reinvest in the IP. A stack of utility announcements to come.'
];

const TRIGGER_POINT_PERCENTAGE = 70;

export default function CircleScreen({scrollContainerHeight}) {
    const scrollRatio = useWindowOnScrollRatio({
        scrollContainerHeight,
        offsetSelector: ".circle-screen"
    });
    const blackText = {color: "black", opacity: 1};
    const {scrollY} = useOnContentScroll({scrollContainerSelector: '.circle-text-container'});
    const {windowHeight} = useWindowDimension();
    const [textContents, setTextContents] = useState(textContentsStrings.map((record)=>({content: record, minScrollTrigger: Infinity})));

    const getTextContents = () => {
        const minTriggerHeight = Math.round(TRIGGER_POINT_PERCENTAGE * windowHeight / 100);
        const textContentsArray = [];
        textContentsStrings.forEach((content, index) => {
            const $currentTextContent = document.querySelector(`.text-content span:nth-child(${index + 1})`) || {offsetTop: -Infinity};
            const $nextTextContent = document.querySelector(`.text-content span:nth-child(${index + 2})`) || {offsetTop: Infinity};
            const minScrollTrigger = $currentTextContent.offsetTop - minTriggerHeight;
            const maxScrollTrigger = $nextTextContent.offsetTop - minTriggerHeight;
            textContentsArray.push({content, minScrollTrigger, maxScrollTrigger});
        });
        return textContentsArray;
    };

    useLayoutEffect(() => {
        setTextContents(getTextContents());
    }, [windowHeight]);

    return (
        <div className={"circle-screen"}>
            <div className="video-container">
                <video
                    className={'square-video'}
                    src={'videos/circle-animation-video.mp4'}
                    loop
                    autoPlay
                    playsInline
                    muted
                ></video>
            </div>
            <div className={"circle-text-container"} style={{
                overflowY: scrollRatio > 0 && scrollRatio < 1 ? 'scroll' : 'hidden',
                display: scrollRatio >= 1 ? 'none' : 'flex'
            }}>
                <div className={"text-content"}>
                    {textContents.map(({content, minScrollTrigger, maxScrollTrigger}, index) => {
                        return <span style={scrollY > minScrollTrigger && scrollY < maxScrollTrigger ? blackText : {}}
                                     key={index}>
                         {content}{' '}
                    </span>
                    })}
                </div>
            </div>
        </div>
    );
}
