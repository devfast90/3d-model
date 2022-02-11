import "./FashionScreen.scss";
import useWindowOnScrollRatio from "../../../shared/hooks/useOnWindowScrollRatio";
import Header1 from "../../../shared/components/header1/Header1";
import {imageList} from "./FashinScreen.data";
import {useLayoutEffect, useRef, useState} from "react";
import quoteIcon from "../../../assets/images/quote-icon-2.svg";
import useOnContentScroll from "../../../shared/hooks/useOnContentScroll";
import useWindowDimension from "../../../shared/hooks/useOnWindowDimension";

const initialBottomPosition = '400px';
const triggerBefore = 200;

function FashionImage({containerStyle, imageStyle, imageSrc, imageId}) {
    const imageRef = useRef();
    const imageClass = `fashion-img-${String(imageId).replace(/\./g, '-')}`;
    const {windowHeight} = useWindowDimension();
    const [scrollTrigger, setScrollTrigger] = useState(0);
    const {scrollY} = useOnContentScroll({scrollContainerSelector: '.scroll-container'});

    useLayoutEffect(()=>{
        const fashionScreenTop = document.querySelector('.fashion-screen').parentElement.parentElement.offsetTop;
        const imageTop = document.querySelector(`.${imageClass}`).offsetTop;
        const absoluteTop = fashionScreenTop + imageTop - windowHeight;
        const scrollTriggerValue = absoluteTop + triggerBefore;
        setScrollTrigger(scrollTriggerValue);
    },[windowHeight]);

    let transformY = initialBottomPosition;
    if(scrollY>scrollTrigger){
        transformY = 0;
    }

    return <div className={`image-container`} style={containerStyle} ref={imageRef} key={imageId}>
        {<img
            src={imageSrc}
            className={imageClass}
            style={{
                ...imageStyle,
                opacity: imageSrc ? 1 : 0,
                transform: `translateY(${transformY})`
            }}
            alt={'fashion image'}
        />}
    </div>
}

export default function FashionScreen({scrollContainerHeight}) {
    const scrollRatio = useWindowOnScrollRatio({
        scrollContainerHeight,
        offsetSelector: `.fashion-screen`,
    });
    return (
        <div className={"fashion-screen"}>
            <div className={"text-container"} style={{height: scrollContainerHeight}}>
                <div className={"text-content"}>
                    <img src={quoteIcon} alt={'quote-icon'}/>
                    {scrollRatio < 0 && <Header1 className={`text-open-animation`}>
                        They’ve got fashion sense!
                    </Header1>}
                    {scrollRatio > 0 && scrollRatio < 0.25 && (
                        <Header1 className={`text-open-animation`}>
                            Original Jor Ros designs
                        </Header1>
                    )}
                    {scrollRatio > 0.25 && scrollRatio < 0.50 && (
                        <Header1 className={`text-open-animation`}>
                            Full body love, and detailing
                        </Header1>
                    )}
                    {scrollRatio > 0.50 && (
                        <Header1 className={`text-open-animation`}>
                            A crafted painterly aesthetic
                        </Header1>
                    )}
                </div>
            </div>
            <div className={"images-container"}>
                {Object.keys(imageList).map((columnKey) => {
                    return <div className={`column ${columnKey}`} key={columnKey}>
                        {imageList[columnKey].map(({imageSrc, imageStyle, containerStyle, imageId}) => {
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
        </div>
    );
}
