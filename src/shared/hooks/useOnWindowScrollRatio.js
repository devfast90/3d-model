import {useState, useMemo, useEffect} from "react";
import useOnWindowScroll from "./useOnWindowScroll";
import useWindowDimension from "./useOnWindowDimension";
import useOnScreen from "./useOnScreen";

export default function useWindowOnScrollRatio({scrollContainerHeight, offsetSelector, minRange = 0, maxRange = 1}) {
    const {scrollY} = useOnWindowScroll();
    const {windowHeight} = useWindowDimension();
    const isOnScreen = useOnScreen({elementSelector: offsetSelector});
    const [offsetValue, setOffsetValue] = useState(0);
    const [lastRatio, setLastRatio] = useState(0);


    const getParentNodeWithClassName = ({sourceNode, className}) => {
        if(!sourceNode.parentNode){
            return null
        } else if(sourceNode.parentNode.className === className){
            return sourceNode.parentNode;
        } else {
            return getParentNodeWithClassName({sourceNode: sourceNode.parentNode, className});
        }
    }

    useEffect(()=>{
        setTimeout(()=>{
            const offset = getParentNodeWithClassName({
                sourceNode: document.querySelector(offsetSelector),
                className: 'sticky-view-container'
            })?.offsetTop + document.querySelector(offsetSelector).offsetTop;
            setOffsetValue(offset);
        }, 20);
    }, [windowHeight]);

    useEffect(()=>{
        if(isOnScreen) {
            let containerHeight;
            if (scrollContainerHeight) {
                //As the heights are provided in vh mode, this is required to convert to pixel height using the following formula
                containerHeight = ((windowHeight * parseInt(scrollContainerHeight)) / 100) - windowHeight;
            } else {
                containerHeight = document.querySelector(offsetSelector)?.height;
            }

            // if(offsetSelector === '.fashion-img-1-1'){
            //     console.log(isOnScreen);
            //     console.log('\n\noffsetValue=> ', offsetValue);
            //     console.log('scrollY=> ', scrollY);
            //     console.log('scrollY - offsetValue => ', scrollY - offsetValue);
            //     console.log('Window Height => ', windowHeight);
            //     console.log('container Height => ', containerHeight);
            //     console.log('Ratio => ', (scrollY - offsetValue) / containerHeight);
            // }
            let scrollRatio = (scrollY - offsetValue) / containerHeight;
            if (scrollRatio < 0) {
                scrollRatio = (scrollY - offsetValue) / windowHeight;
            }
            setLastRatio(scrollRatio);
        }
    },[scrollY, windowHeight, isOnScreen]);

    return lastRatio;
}
