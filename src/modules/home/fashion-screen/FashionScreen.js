import "./FashionScreen.css";
import useWindowOnScrollRatio from "../../../shared/hooks/useOnWindowScrollRatio";
import Header1 from "../../../shared/components/header1/Header1";
import {imageList} from "./FashinScreen.data";
import {useRef} from "react";

const scrollMovementPixels = 20;
const initialBottomPosition = 100;

function FashionImage({containerStyle, imageStyle, imageSrc, imageId}){
    const imageRef = useRef();
    const imageClass = `fashion-img-${String(imageId).replace(/\./g, '-')}`;
    const scrollRatio = useWindowOnScrollRatio({
        offsetSelector: `.${imageClass}`,
    });

    let transformY = initialBottomPosition;
    if(scrollRatio>=-0.9 && scrollRatio <1){
        transformY = scrollRatio*scrollMovementPixels;
    } else if(scrollRatio>=1){
        transformY = scrollMovementPixels;
    } else if(scrollRatio>-0.9){
        transformY = transformY - scrollMovementPixels;
    }

    return <div className={`image-container`} style={containerStyle} ref={imageRef} key={imageId}>
        {<img
            src={imageSrc}
            className={imageClass}
            style={{
                ...imageStyle,
                opacity: imageSrc ? 1: 0,
                transform: `translateY(${transformY}px)`
            }}
            alt={'fashion image'}
        />}
    </div>
}

export default function FashionScreen() {
  return (
    <div className={"fashion-screen"}>
      <div className={"images-container"}>
          {Object.keys(imageList).map((columnKey) => {
              return <div className={`column ${columnKey}`} key={columnKey}>
                  {imageList[columnKey].map(({ imageSrc, imageStyle, containerStyle, imageId}, index) => {
                      return <FashionImage
                          key={imageId}
                          imageId={imageId}
                          imageSrc={imageSrc}
                          imageStyle={imageStyle}
                          containerStyle={containerStyle}
                      />;
                  })}
              </div>
          })}
      </div>
      <div className={"text-container"}>
          {/*scrollRatio < 0.25 &&*/}
      <Header1 className={`text-open-animation`}>
        They’ve got fashion sense!
      </Header1>
        {/*{scrollRatio > 0.25 && scrollRatio < 0.5 && (*/}
        {/*  <Header1 className={`text-open-animation`}>*/}
        {/*    Original Jor Ros designs*/}
        {/*  </Header1>*/}
        {/*)}*/}
        {/*{scrollRatio > 0.5 && scrollRatio < 0.75 && (*/}
        {/*  <Header1 className={`text-open-animation`}>*/}
        {/*    Full body love, and detailing*/}
        {/*  </Header1>*/}
        {/*)}*/}
        {/*{scrollRatio > 0.75 && (*/}
        {/*  <Header1 className={`text-open-animation`}>*/}
        {/*    A crafted painterly aesthetic*/}
        {/*  </Header1>*/}
        {/*)}*/}
      </div>
    </div>
  );
}
