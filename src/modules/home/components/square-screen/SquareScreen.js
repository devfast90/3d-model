import './SquareScreen.css';
import Header1 from "../../../shared/components/header1/Header1";

export default function SquareScreen({scrollRatio}){
    return <div className={'square-screen'}>
        <div className={'screen-container'}>
           <div className={'square'}>
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
