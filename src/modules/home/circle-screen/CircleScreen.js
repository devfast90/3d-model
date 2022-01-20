import "./CircleScreen.css";
import useWindowOnScrollRatio from "../../../shared/hooks/useOnWindowScrollRatio";
import circleImg from "../../../assets/images/circle-screen/circle.png";
import circleActor from "../../../assets/images/circle-screen/cicle-actor.png";
import Header2 from "../../../shared/components/header2/Header2";
import Header1 from "../../../shared/components/header1/Header1";
import Header3 from "../../../shared/components/header3/Header3";

export default function CircleScreen({ scrollContainerHeight }) {
  const scrollRatio = useWindowOnScrollRatio({
    scrollContainerHeight,
    offsetSelector: ".circle-screen"
  });

  return (
    <div className={"circle-screen"}>
      {/*<div className={'screen-container'}>*/}
      <div className={"circle"}>
        <img src={circleImg} alt={"circle-img"} className={"circle-image"} />
        {<CircleFirstPart scrollRatio={Math.min(scrollRatio * 2, 1)} />}
        {
          <CircleSecondPart
            scrollRatio={Math.min((scrollRatio - 0.5) * 2, 1)}
          />
        }
      </div>
      {/*</div>*/}
    </div>
  );
}

function CircleFirstPart({ scrollRatio }) {
  const blackText = { color: "black", opacity: 1 };

  let headerStyle = { transform: "translate(0,0)", opacity: 1 };
  if (scrollRatio === 1) {
    headerStyle = { transform: "translate(100vw, 0)", opacity: 0 };
  } else if (scrollRatio <= 0) {
    headerStyle = { transform: "translate(-100vh, 0)", opacity: 0 };
  }

  return (
    <Header2 className={"text-content"} style={headerStyle}>
      <span style={scrollRatio < 0.33 ? blackText : {}}>
        The iconic world of JOR ROSS, visionary artist of music, streetwear and
        pop culture.{" "}
      </span>
      <span style={scrollRatio > 0.33 && scrollRatio < 0.66 ? blackText : {}}>
        A wild roadmap to make bad influencers the stars of the Metaverse,{" "}
      </span>
      <span style={scrollRatio > 0.66 ? blackText : {}}>
        Gamified by the lead writer of this years ASSASSIN’s CREED.{" "}
      </span>
    </Header2>
  );
}

function CircleSecondPart({ scrollRatio }) {
  let circleAnchorImageStyle = { transform: "translate(0,100vh)", opacity: 0 };
  let textStyle = { transform: "translate(-40vw,0)", opacity: 0 };
  if (scrollRatio >= 0) {
    circleAnchorImageStyle = { transform: "translate(0, 0)", opacity: 1 };
    textStyle = { transform: "translate(0,0)", opacity: 1 };
  } else if (scrollRatio === 0) {
    circleAnchorImageStyle = { transform: "translate(0,100vh)", opacity: 0 };
    textStyle = { transform: "translate(40vw,0)", opacity: 0 };
  }

  return (
    <>
      <img
        src={circleActor}
        alt={"circle-actor"}
        className={"circle-actor-img"}
        style={circleAnchorImageStyle}
      />
      <Header1 className={"actor-text-content"} style={textStyle}>
        Who do you want to be?
      </Header1>
      <Header3
        className={"actor-text-content actor-text-content-secondary"}
        style={textStyle}
      >
        Six avatar archetypes.
        <br />
        <br />
        10k Bad Influencers.
        <br />
        <br />
        All want to be ‘Metaverse famous’
      </Header3>
    </>
  );
}
