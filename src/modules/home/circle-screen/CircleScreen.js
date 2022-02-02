import "./CircleScreen.css";
import useWindowOnScrollRatio from "../../../shared/hooks/useOnWindowScrollRatio";
import circleImg from "../../../assets/images/circle-screen/circle.png";
import circleActor from "../../../assets/images/circle-screen/cicle-actor.png";
import Header2 from "../../../shared/components/header2/Header2";
import Header1 from "../../../shared/components/header1/Header1";
import Header3 from "../../../shared/components/header3/Header3";
import {useMemo} from "react";

export default function CircleScreen({scrollContainerHeight}) {
    const scrollRatio = useWindowOnScrollRatio({
        scrollContainerHeight,
        offsetSelector: ".circle-screen"
    });

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
            scrollRatio - {scrollRatio}
            {<CircleFirstPart scrollRatio={Math.min(scrollRatio * 2, 1)}/>}
            {<CircleSecondPart scrollRatio={Math.min((scrollRatio - 0.5) * 2, 1)}/>}
        </div>
    );
}

function CircleFirstPart({scrollRatio}) {
    const blackText = {color: "black", opacity: 1};
    const textContents = useMemo(() => {
        const textContents = [
            'The iconic world of JOR ROSS, visionary artist of music, streetwear and pop culture.',
            'A wild roadmap to make bad influencers the stars of the Metaverse,',
            'Gamified by the lead writer of this years ASSASSIN’s CREED.',
            'Metaverse-ready avatars by world-class technical artists.',
            'Full commitment to reinvest in the IP. A stack of utility announcements to come.'
        ];

        return textContents.map((content, index) => {
            const initialRatio = 2;
            const minRatio = index * (initialRatio / textContents.length);
            const maxRatio = Math.min((index + 1) * (initialRatio / textContents.length), 1);
            return {content, minRatio, maxRatio};
        })
    }, []);

    if(scrollRatio ===1){
        return null;
    }

    return (
        <div className={"text-content"} style={{top: `${2040*(1-scrollRatio)}px` }}>
            {textContents.map(({content, maxRatio, minRatio}) => {
                return <span style={scrollRatio > minRatio && scrollRatio < maxRatio ? blackText : {}}>
                    {content}
                </span>
            })}
        </div>
    );
}

function CircleSecondPart({scrollRatio}) {
    let circleAnchorImageStyle = {transform: "translate(0,100vh)", opacity: 0};
    let textStyle = {transform: "translate(-40vw,0)", opacity: 0};
    if (scrollRatio >= 0) {
        circleAnchorImageStyle = {transform: "translate(0, 0)", opacity: 1};
        textStyle = {transform: "translate(0,0)", opacity: 1};
    } else if (scrollRatio === 0) {
        circleAnchorImageStyle = {transform: "translate(0,100vh)", opacity: 0};
        textStyle = {transform: "translate(40vw,0)", opacity: 0};
    }

    return (
        <>
            <img
                src={circleActor}
                alt={"circle-actor"}
                className={"circle-actor-img"}
                style={circleAnchorImageStyle}
            />
            <div className={'side-text-content'} style={textStyle}>
                <Header1 className={"actor-text-content"}>
                    Who do you want to be?
                </Header1>
                <Header3 className={"actor-text-content actor-text-content-secondary"}>
                    Six avatar<br/>archetypes.<br/><br/>10k Bad Influencers.<br/><br/>All want to be<br/>‘Metaverse famous’
                </Header3>
            </div>
        </>
    );
}
