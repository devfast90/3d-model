import './SquareWithTextScreen.css';
import Header1 from "../../../shared/components/header1/Header1";

export default function SquareWithTextScreen(){
    return <div className={'square-with-text-screen'}>
        <div className={'screen-container'}>
           <div className={'square'}>
               <Header1 className={'square-text-container'}>
                   <span>
                       10k Fully rigged metaverse ready avatars
                       Coming early 2022 &nbsp;
                   </span>
               </Header1>
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
