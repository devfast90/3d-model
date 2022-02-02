import "./PhaseScreen.css";
import useWindowOnScrollRatio from "../../../shared/hooks/useOnWindowScrollRatio";
import Header1 from "../../../shared/components/header1/Header1";
import SubHeader from "../../../shared/components/sub-header/SubHeader";
import phase1_1Img from '../../../assets/images/phase-screen/phase1.1.png';
import phase1_2Img from '../../../assets/images/phase-screen/phase1.2.png';
import {useEffect} from "react";
import {FONT_COLORS} from "../scroll-container/ScrollContainer";

const phaseData = [
    {
        left: {
            header: 'Phase 1',
            subHeader: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt'
        },
        right: {content: <><img src={phase1_1Img}/><img src={phase1_2Img} className={'floating-img'}/></>},
        displayTrigger: 0
    },
    {right: {header: 'Phase 2', subHeader: 'Coming soon'}, displayTrigger: 0.10},
    {left: {header: 'Phase 3', subHeader: 'Coming soon'}, displayTrigger: 0.15},
    {right: {header: 'Phase 4', subHeader: 'Coming soon'}, displayTrigger: 0.20}
]

export default function PhaseScreen({scrollContainerHeight, setFontColor}) {
    const scrollRatio = useWindowOnScrollRatio({
        scrollContainerHeight,
        offsetSelector: ".phase-screen"
    });

    console.log(scrollRatio);

    useEffect(()=>{
        if(scrollRatio > 0 ){
            setFontColor(FONT_COLORS.BLACK);
        }
    }, [scrollRatio]);

    const renderContent = ({header, subHeader, content} = {}, displayTrigger) => {
        if(!header && !subHeader && !content){
            return null;
        }
        return <>
            {content ? content : <>
                <Header1 className={`${scrollRatio > displayTrigger  ? 'text-open-animation': ''}`}>{header}</Header1>
                <SubHeader className={`${scrollRatio > displayTrigger  ? 'text-open-animation': ''}`}>{subHeader}</SubHeader>
            </>}
        </>
    }

    return (
        <div
            className={"phase-screen"}
            style={{
                background: scrollRatio >= 0 ? "white" : "black",
                // overflowY:scrollRatio >= 0.33 && scrollRatio <= 0.66 ? "scroll" : "hidden"
            }}
        >
            <div className={'middle-line'} style={{height: scrollRatio >= 0 ? '100%' : 0}}/>
            {phaseData.map(({left, right, displayTrigger}, index) => {
                return <div className={`phase phase-${index + 1}`} style={{opacity: scrollRatio > displayTrigger ? 1 :0 }}>
                    <div className={'left-container'}>
                        {renderContent(left, displayTrigger)}
                    </div>
                    <div className={'right-container'}>
                        {renderContent(right, displayTrigger)}
                    </div>
                </div>
            })}
        </div>
    );
}
