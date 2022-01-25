import "./TeamScreen.css";
import useWindowOnScrollRatio from "../../../shared/hooks/useOnWindowScrollRatio";
import titleIcon from '../../../assets/images/team-screen/title-icon.svg';
import teamUser1 from '../../../assets/images/team-screen/team-user-1.png';
import teamUser2 from '../../../assets/images/team-screen/team-user-2.png';
import Header1 from "../../../shared/components/header1/Header1";
import Header3 from "../../../shared/components/header3/Header3";
import useWindowDimension from "../../../shared/hooks/useOnWindowDimension";
import {useMemo} from "react";

const teamListTemp = [
    {title: 'Team Member', title2: '/// Job Role', description: 'Lorem ipsum  sit amet, consectetur or sit amet, consectetur', imgSrc: teamUser1},
    {title: 'Team Member', title2: '/// Job Role', description: 'Lorem ipsum  sit amet, consectetur or sit amet, consectetur', imgSrc: teamUser2},
    {title: 'Team Member', title2: '/// Job Role', description: 'Lorem ipsum  sit amet, consectetur or sit amet, consectetur', imgSrc: teamUser1},
    {title: 'Team Member', title2: '/// Job Role', description: 'Lorem ipsum  sit amet, consectetur or sit amet, consectetur', imgSrc: teamUser2},
];

const teamList = [...teamListTemp, ...teamListTemp, ...teamListTemp];

export default function TeamScreen({scrollContainerHeight}) {
    const scrollRatio = useWindowOnScrollRatio({
        scrollContainerHeight,
        offsetSelector: ".team-screen"
    });

    const {windowWidth} = useWindowDimension();

    const {membersInRow, rows, leftPadding, rowDisplayTrigger} = useMemo(()=>{
        const unitWidth = 160 + 40;
        const membersInRow = Math.floor((windowWidth - 20) / unitWidth);
        const rows = Array.from(Array(Math.max(Math.ceil(teamList.length / membersInRow), 1)));
        const leftPadding = (windowWidth - ((Math.min(membersInRow, teamList.length) * unitWidth) - 40));
        const rowDisplayTrigger = 1 / (rows.length+1);
        return {unitWidth, membersInRow, rows, leftPadding, rowDisplayTrigger};
    }, [windowWidth]);

    const renderTeamList = ()=>{
        return <div className={'team-list'}>
            {rows.map((row, index)=>{
                return <div className={'team-row '} key={index}
                            style={{
                                paddingLeft: leftPadding,
                                opacity:(scrollRatio >= rowDisplayTrigger*(index +1)) ? 1 : 0,
                                transform:(scrollRatio >= rowDisplayTrigger*(index+1)) ? 'translateY(0px)' : 'translateY(500px)'
                            }}>
                    {teamList.slice(index*membersInRow, (index*membersInRow + membersInRow ) )
                        .map(({title, title2, description, imgSrc}, innerIndex) => {
                            return <div className={'team-member'} key={innerIndex}>
                                <div className={'text-container'}>
                                    <Header3 className={'title'}> {title}</Header3>
                                    <Header3 className={'title'}> {title2}</Header3><br/>
                                    <div className={'description'}> {description}</div>
                                </div>
                                <img src={imgSrc}/>
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
