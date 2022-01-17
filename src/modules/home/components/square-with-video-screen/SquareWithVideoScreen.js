import './SquareWithVideoScreen.css';

export default function SquareWithVideoScreen(){
    return <div className={'square-with-video-screen'}>
        <div className={'screen-container'}>
           <div className={'square'}>
               <div className='video-container'>
                   <video src="https://css-tricks-post-videos.s3.us-east-1.amazonaws.com/708209935.mp4" autoPlay loop
                          playsInline muted></video>
               </div>
           </div>
        </div>
    </div>
}
