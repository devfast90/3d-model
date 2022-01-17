import {useState, useMemo} from "react";
import useOnWindowScroll from "./useOnWindowScroll";
import useWindowDimension from "./useOnWindowDimension";

export default function useWindowOnScrollRatio({scrollContainerHeight, minRange = 0, maxRange = 1}) {
    const {scrollY} = useOnWindowScroll();
    const {windowHeight} = useWindowDimension();

    return useMemo(()=>{
        const containerHeight = ((windowHeight * parseInt(scrollContainerHeight) )/ 100) - windowHeight;
        return scrollY / containerHeight;
    },[scrollY, windowHeight]);
}
