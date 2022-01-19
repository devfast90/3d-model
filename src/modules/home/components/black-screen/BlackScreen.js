import './BlackScreen.css';
import useWindowOnScrollRatio from "../../../shared/hooks/useOnWindowScrollRatio";
import Header1 from "../../../shared/components/header1/Header1";

export default function BlackScreen({scrollContainerHeight}) {
    const scrollRatio = useWindowOnScrollRatio({scrollContainerHeight, offsetSelector: '.black-screen'});

    return <div className={'black-screen'} style={{background: scrollRatio>= 0?'black': 'white' }}>
        <div className={'mash'} style={{transform: `rotateY(${Math.min(scrollRatio * 2, 1) * 90}deg)`}}/>
        <div className={'actor-image'}/>
        <div className={'actor-video'}>
            <div className='video-container'>
                <video src="https://css-tricks-post-videos.s3.us-east-1.amazonaws.com/708209935.mp4" autoPlay loop
                       playsInline muted></video>
            </div>
        </div>
        <div className={'text-container'}>
            {scrollRatio < 0.25 && <Header1 className={`text-open-animation`}>
                They might be a bit broken inside, but outside they’re perfection.
            </Header1>}
            {(scrollRatio > 0.25 && scrollRatio < 0.5) && <Header1  className={`text-open-animation`}>
                All 6 archetypes have a single topology
            </Header1>}
            {(scrollRatio > 0.5 && scrollRatio < 0.75) && <Header1  className={`text-open-animation`}>
                All attributes dynamically programmed to fit
            </Header1>}
            {(scrollRatio > 0.75) && <Header1  className={`text-open-animation`}>
                Advanced face rigs (hint)
            </Header1>}
        </div>
    </div>
}
