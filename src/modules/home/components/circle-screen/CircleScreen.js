import './CircleScreen.css';
import useWindowOnScrollRatio from "../../../shared/hooks/useOnWindowScrollRatio";
import circleImg from '../../../../assets/images/circle-screen/circle.png'
import Header2 from "../../../shared/components/header2/Header2";

export default function CircleScreen({scrollContainerHeight}){
    const scrollRatio = useWindowOnScrollRatio({scrollContainerHeight, offsetSelector: '.circle-screen'});
    const blackText = {color: 'black', opacity: 1};

    let headerStyle = {transform: 'translate(0,0)', opacity: 1};
    if(scrollRatio === 1){
        headerStyle = {transform: 'translate(100vw, 0)', opacity: 0};
    } else if(scrollRatio <=0 ){
        headerStyle = {transform: 'translate(-100vh, 0)', opacity: 0};
    }

    return <div className={'circle-screen'}>
        <div className={'screen-container'}>
           <div className={'circle'}>
               <img src={circleImg} alt={'circle-img'}/>
               <Header2 className={'text-content'} style={headerStyle}>
                   <span style={scrollRatio < 0.33 ? blackText: {}}>The iconic world of JOR ROSS, visionary artist of music, streetwear and pop culture. </span>
                   <span style={scrollRatio > 0.33 && scrollRatio < 0.66 ? blackText: {}}>A wild roadmap to make bad influencers the stars of the Metaverse, </span>
                   <span style={scrollRatio > 0.66 ? blackText: {}}>Gamified by the lead writer of this years ASSASSIN’s CREED. </span>
               </Header2>
           </div>
        </div>
    </div>
}
