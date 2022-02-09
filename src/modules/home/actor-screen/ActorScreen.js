import Header1 from "../../../shared/components/header1/Header1";
import "./ActorScreen.scss";
import useWindowOnScrollRatio from "../../../shared/hooks/useOnWindowScrollRatio";
import quoteIcon from "../../../assets/images/quote-icon.svg";
import actorImg from '../../../assets/images/actor-screen/actor.png';
import meshImg from '../../../assets/images/actor-screen/mesh.png';
import useScreenType from "../../../shared/hooks/useScreenType";
import {useEffect, useLayoutEffect, useState} from "react";

export default function ActorScreen({ scrollContainerHeight, setIsModelOpen }) {
  const {isMobile} = useScreenType();
  const [isFirstLoad, setIsFirstLoad]= useState(true);
  const scrollRatio = useWindowOnScrollRatio({
    scrollContainerHeight,
    offsetSelector: ".actor-screen"
  });

  const getTextScrollRatio = (scrollRatio)=>{
      return isMobile ? Math.min(scrollRatio * 2, 1): scrollRatio;
  };

  const getImageScrollRatio = (scrollRatio)=>{
    return isMobile ? Math.min((scrollRatio - 0.5) * 2, 1): scrollRatio;
  };

  useLayoutEffect(()=>{
    document.querySelector('.scroll-container').scrollTo(0,100);
  }, []);

  useEffect(()=>{
    if(scrollRatio === 0 && !isFirstLoad){
      setIsModelOpen(true);
    }
    setIsFirstLoad(false);
  },[scrollRatio]);

  return (
    <>
      <div className={"actor-screen"}>
        <ActorScreenText scrollRatio={getTextScrollRatio(scrollRatio)} isMobile={isMobile}/>
        <ActorScreenImage scrollRatio={getImageScrollRatio(scrollRatio)} isMobile={isMobile}/>
      </div>
    </>
  );
}

function ActorScreenText({scrollRatio, isMobile}){
  return <>
    {((isMobile && scrollRatio < 1) || !isMobile) &&
    <div className={"text-container"}>
      <div className={'text-content'}>
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
    </div>}
  </>
}

function ActorScreenImage({scrollRatio, isMobile}){
  return <>
    {((isMobile && scrollRatio > 0) || !isMobile) && <div className={"image-modal"}>
      <img src={meshImg} alt={'mesh'} className={`mesh-img ${!isMobile && 'img-open-animation'}`}/>
      <img src={actorImg} alt={'actor'} className={'actor-img'}
           style={{clipPath: `inset(0% 0% ${100 * (1 - Math.max(scrollRatio, 0))}% 0%)`}}/>
    </div>}
  </>
}
