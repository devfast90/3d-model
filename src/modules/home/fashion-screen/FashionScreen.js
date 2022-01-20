import "./FashionScreen.css";
import useWindowOnScrollRatio from "../../../shared/hooks/useOnWindowScrollRatio";
import Header1 from "../../../shared/components/header1/Header1";
import arrowImg from "../../../assets/images/fashion-screen/arrow.png";
import maskImg from "../../../assets/images/fashion-screen/mask.png";
import orangeJacketImg from "../../../assets/images/fashion-screen/orange-jacket.png";
import pinkJacketImg from "../../../assets/images/fashion-screen/pink-jacket.png";
import shoeImg from "../../../assets/images/fashion-screen/shoes.png";

const imageList = [
  {
    imageSrc: pinkJacketImg,
    style: { top: -50, left: 0, height: 200 },
    transformTrigger: 0
  },
  {
    imageSrc: shoeImg,
    style: { top: 20, left: "50%", height: 120 },
    transformTrigger: 0.2
  },
  {
    imageSrc: arrowImg,
    style: { top: 300, left: 150, height: 100 },
    transformTrigger: 0.3
  },
  {
    imageSrc: orangeJacketImg,
    style: { top: 400, left: "30%", height: 300 },
    transformTrigger: 0.4
  },
  {
    imageSrc: shoeImg,
    style: { top: 680, left: -50, height: 120 },
    transformTrigger: 0.5
  },
  {
    imageSrc: arrowImg,
    style: { top: 680, right: 200, height: 120 },
    transformTrigger: 0.6
  },
  {
    imageSrc: maskImg,
    style: { top: 880, left: "30%", height: 120 },
    transformTrigger: 0.7
  }
];

export default function FashionScreen({ scrollContainerHeight }) {
  const scrollRatio = useWindowOnScrollRatio({
    scrollContainerHeight,
    offsetSelector: ".fashion-screen"
  });

  return (
    <div className={"fashion-screen"}>
      <div className={"images-container"}>
        {imageList.map(({ imageSrc, style, transformTrigger }) => {
          return (
            <img
              src={imageSrc}
              style={{
                ...style,
                transform:
                  scrollRatio >= transformTrigger
                    ? "translateY(0px)"
                    : "translateY(100vh)"
              }}
            />
          );
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
