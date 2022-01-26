import "./FashionScreen.css";
import useWindowOnScrollRatio from "../../../shared/hooks/useOnWindowScrollRatio";
import Header1 from "../../../shared/components/header1/Header1";
import {imageList, triggers} from "./FashinScreen.data";

export default function FashionScreen({ scrollContainerHeight }) {
  const scrollRatio = useWindowOnScrollRatio({
    scrollContainerHeight,
    offsetSelector: ".fashion-screen"
  });

  return (
    <div className={"fashion-screen"}>
        {/*{scrollRatio}*/}
      <div className={"images-container"}>
          {Object.keys(imageList).map((columnKey) => {
              return <div className={`column ${columnKey}`}>
                  {imageList[columnKey].map(({ imageSrc, style}, index) => {
                      return (
                          <img
                              src={imageSrc}
                              style={{
                                  ...style,
                                  transform:
                                      scrollRatio >= triggers[index]
                                          ? "translateY(0px)"
                                          : "translateY(100vh)"
                              }}
                          />
                      );
                  })}
              </div>
          })}
      </div>
      <div className={"text-container"}>
        {scrollRatio < 0.25 && (
          <Header1 className={`text-open-animation`}>
            They’ve got fashion sense!
          </Header1>
        )}
        {scrollRatio > 0.25 && scrollRatio < 0.5 && (
          <Header1 className={`text-open-animation`}>
            Original Jor Ros designs
          </Header1>
        )}
        {scrollRatio > 0.5 && scrollRatio < 0.75 && (
          <Header1 className={`text-open-animation`}>
            Full body love, and detailing
          </Header1>
        )}
        {scrollRatio > 0.75 && (
          <Header1 className={`text-open-animation`}>
            A crafted painterly aesthetic
          </Header1>
        )}
      </div>
    </div>
  );
}
