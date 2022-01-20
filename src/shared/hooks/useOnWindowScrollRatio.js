import {useState, useMemo, useEffect} from "react";
import useOnWindowScroll from "./useOnWindowScroll";
import useWindowDimension from "./useOnWindowDimension";

export default function useWindowOnScrollRatio({scrollContainerHeight, offsetSelector, minRange = 0, maxRange = 1}) {
    const {scrollY} = useOnWindowScroll();
    const {windowHeight} = useWindowDimension();
    const [offsetValue, setOffsetValue] = useState(0);

    useEffect(()=>{
        setTimeout(()=>{
            const offset = document.querySelector(offsetSelector)?.parentElement.parentElement.offsetTop || 0;
            setOffsetValue(offset);
        }, 20);
    }, [windowHeight]);

    return useMemo(()=>{
        const containerHeight = ((windowHeight * parseInt(scrollContainerHeight) )/ 100) - windowHeight;
        // if(offsetSelector === '.square-screen'){
        //     console.log('\n\noffsetValue=> ', offsetValue);
        //     console.log('scrollY=> ', scrollY);
        //     console.log('offsetValue - scrollY => ', scrollY - offsetValue);
        //     console.log('container Height => ', containerHeight);
        //     console.log('Ratio => ', (scrollY - offsetValue) / containerHeight);
        // }
        return (scrollY - offsetValue) / containerHeight;
    },[scrollY, windowHeight]);
}
