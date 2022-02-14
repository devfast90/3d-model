import "./TeamScreen.scss";
import useWindowOnScrollRatio from "../../../shared/hooks/useOnWindowScrollRatio";
import titleIcon from '../../../assets/images/team-screen/title-icon.svg';
import Header1 from "../../../shared/components/header1/Header1";
import Header3 from "../../../shared/components/header3/Header3";
import useWindowDimension from "../../../shared/hooks/useOnWindowDimension";
import {useMemo} from "react";
import {teamListTemp} from "./TeamScreen.data";

const teamList = [...teamListTemp];
const mobileTrigger = 1250;

export default function TeamScreen({scrollContainerHeight}) {
    const scrollRatio = useWindowOnScrollRatio({
        scrollContainerHeight,
        offsetSelector: ".team-screen"
    });

    const {windowWidth} = useWindowDimension();
    const isMobile = mobileTrigger > windowWidth;

    const {membersInRow, rows, leftPadding, rowDisplayTrigger} = useMemo(()=>{
        const gutter = 60;
        const memberWidth = 180;
        const unitWidth = memberWidth + gutter;
        let membersInRow = Math.min(Math.floor((windowWidth - (gutter/2)) / unitWidth), 5);
        if(windowWidth < mobileTrigger){
            membersInRow = 5;
        }
        const rows = Array.from(Array(Math.max(Math.ceil(teamList.length / membersInRow), 1)));
        const leftPadding = (windowWidth - ((Math.min(membersInRow, teamList.length) * unitWidth) - gutter));
        const rowDisplayTrigger = 1 / (rows.length+1);
        return {unitWidth, membersInRow, rows, leftPadding, rowDisplayTrigger};
    }, [windowWidth]);

    const renderTeamList = ()=>{
        return <div className={'team-list'}>
            {rows.map((row, index)=>{
                let rowStyle = {opacity: 0, transform: `translateY(${isMobile ? '100vh':'280px'})`};
                if(scrollRatio >= rowDisplayTrigger*(index +2)){
                    rowStyle = {opacity: 0, transform: `translateY(${isMobile ? '-100vh':'-280px'})`};
                } else if(scrollRatio >= rowDisplayTrigger*(index +1) || (index===0 && scrollRatio >=0)){
                    rowStyle = {opacity: 1, transform: 'translateY(0px)'};
                }
                return <div className={'team-row'} key={index} style={{paddingLeft: leftPadding, ...rowStyle}}>
                    {teamList.slice(index*membersInRow, (index*membersInRow + membersInRow ) )
                        .map(({title, title2, description, imageName}, innerIndex) => {
                            return <div className={'team-member'} key={innerIndex}>
                                <div className={'text-container'}>
                                    <Header3 className={'title'}> {title}</Header3>
                                    <Header3 className={'title'}> {title2}</Header3><br/>
                                    <div className={'description'}> {description}</div>
                                </div>
                                <img src={`/images/team-people/${imageName}.png`}/>
                            </div>
                        })}
                </div>
            })}
        </div>
    }

    return (
        <div className={"team-screen"}
             style={{overflowY:"hidden"}}>
            <div className={'title'}>
                <img src={titleIcon}/> <br/>
                <Header1>The team</Header1>
            </div>
            {renderTeamList()}
        </div>
    );
}
