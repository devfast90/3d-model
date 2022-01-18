import './SquareScreen.css';
import useWindowOnScrollRatio from "../../../shared/hooks/useOnWindowScrollRatio";
import {useMemo} from "react";

export default function SquareScreen({scrollContainerHeight}){
    const scrollRatio = useWindowOnScrollRatio({scrollContainerHeight, offsetSelector: '.square-screen'});
    const squareDimension = useMemo(()=>{
        if(scrollRatio<0){
            const scrollRatioAbs = Math.abs(scrollRatio);
            const height =  100 - (50  - (scrollRatioAbs* 2)* 50);
            const width =  100 - (40  - (scrollRatioAbs* 2)* 40);
            return {
                height: `${height}vh`,
                width: `${width}vw`,
            };
        } else {
            const scrollRatioAbs = Math.abs(scrollRatio);
            const height =  Math.min(100, 100 - (50  - (scrollRatioAbs)* 50));
            const width =  Math.min(100, 100 - (40  - (scrollRatioAbs)* 40));
            const dimension = {
                height: `${height}vh`,
                width: `${width}vw`
            };
            if(height >= 100){
                dimension.border = '0px solid black';
                dimension.borderRadius = '0px';
            } else{
                dimension.border = '10px solid black';
                dimension.borderRadius = '40px';
            }
            return dimension;
        }
    }, [scrollRatio]);

    return <div className={'square-screen'}>
        <div className={'screen-container'}>
           <div className={'square'} style={squareDimension}>
               {/*<Header1 className={'square-text-container'}>*/}
               {/*    <span>*/}
               {/*        10k Fully rigged metaverse ready avatars*/}
               {/*        Coming early 2022 &nbsp;*/}
               {/*    </span>*/}
               {/*</Header1>*/}
               {scrollRatio > 0 && <div className='video-container' style={{borderRadius: scrollRatio>=1 ? 0: 30 }}>
                   <video src="https://css-tricks-post-videos.s3.us-east-1.amazonaws.com/708209935.mp4" autoPlay loop
                          playsInline muted></video>
               </div>}
           </div>
        </div>
    </div>
}
