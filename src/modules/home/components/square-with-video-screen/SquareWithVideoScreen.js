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
        {/*<div className={`scroll-contents`}>*/}
        {/*    <div ref={firstScrollContentRef} className={'scroll-content1'} />*/}
        {/*    <div ref={secondScrollContentRef} className={'scroll-content2'} />*/}
        {/*    <div ref={thirdScrollContentRef} className={'scroll-content3'} />*/}
        {/*    <div ref={thirdScrollContentRef} className={'scroll-content4'} />*/}
        {/*</div>*/}
    </div>
}
