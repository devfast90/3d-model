import Header1 from "../../../shared/components/header1/Header1";
import "./ActorScreen.css";
import useWindowOnScrollRatio from "../../../shared/hooks/useOnWindowScrollRatio";
import quoteIcon from "../../../assets/images/quote-icon.svg";
import {useEffect, useState} from "react";

export default function ActorScreen({ scrollContainerHeight }) {
  const [mashToTop, setMashToTop] = useState(false);
  const scrollRatio = useWindowOnScrollRatio({
    scrollContainerHeight,
    offsetSelector: ".actor-screen"
  });

  useEffect(()=>{
    setTimeout(()=>setMashToTop(true), 400);
  }, [])

  return (
    <>
      <div className={"actor-screen"}>
        <div className={"text-container"}>
          <img src={quoteIcon} alt={'quote-icon'}/>
          {scrollRatio < 0.33 && (
            <Header1 className={`text-content1 text-open-animation`}>
              Be weird,<br/> dumb, sexy, broken, whatever. <br/> Just not f&$!#g boring.
            </Header1>
          )}
          {scrollRatio > 0.33 && scrollRatio < 0.66 && (
            <Header1 className={"text-content2 text-open-animation"}>
              10,000 wayward misfits are rigged <br />
              and ready to leave web 2.0 behind <br />
              and take over Metaverse
            </Header1>
          )}
          {scrollRatio > 0.66 && (
            <Header1 className={"text-content3 text-open-animation"}>
              The Bad Influence takeover begins <br/>
              Early 2022
            </Header1>
          )}
        </div>
        <div className={"image-modal"}>
          <div className={`mash ${mashToTop ? 'to-top': ''}`}/>
          <div
            className={"actor"}
            style={{ height: `${(scrollRatio - 0.1) * 2 * 100}%` }}
          />
        </div>
      </div>
    </>
  );
}
