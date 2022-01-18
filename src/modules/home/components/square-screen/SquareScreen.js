import './SquareScreen.css';
import Header1 from "../../../shared/components/header1/Header1";
import useWindowOnScrollRatio from "../../../shared/hooks/useOnWindowScrollRatio";

export default function SquareScreen({scrollContainerHeight}){
    const scrollRatio = useWindowOnScrollRatio({scrollContainerHeight});
    const getSquareDimension = ()=>{
        const height = Math.min(scrollRatio * 100, 60);
        console.log(height, scrollRatio, scrollRatio* 100);
        return {height: `calc(${height}vh - calc(2 * var(--header-height)))`};
    }
    return <div className={'square-screen'}>
        <div className={'screen-container'}>
           <div className={'square'} style={getSquareDimension()}>
               <Header1 className={'square-text-container'}>
                   <span>
                       10k Fully rigged metaverse ready avatars
                       Coming early 2022 &nbsp;
                   </span>
               </Header1>
               <div className='video-container'>
                   <video src="https://css-tricks-post-videos.s3.us-east-1.amazonaws.com/708209935.mp4" autoPlay loop
                          playsInline muted></video>
               </div>
           </div>
        </div>
    </div>
}
