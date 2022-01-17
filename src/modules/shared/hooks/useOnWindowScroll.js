import { useState, useEffect } from "react";

const getScroll = (event) => ({
    scrollX: (event && event.target && event.target.scrollLeft) || 0,
    scrollY: (event && event.target && event.target.scrollTop) || 0,
});

/**
 * Hook that monitors window scroll, and updates the object
 * at the end of each window scroll. It returns the current
 * offset X and Y position.
 * @param {If true, fires the event only when the user stops scrolling.} onlyOnScrollEnd
 */
export default function useOnWindowScroll(onlyOnScrollEnd) {
    const [windowScroll, setWindowScroll] = useState(getScroll());

    useEffect(() => {
        let scrollId;

        const handleScroll = (event) => {
            if (onlyOnScrollEnd) {
                clearTimeout(scrollId);
                scrollId = setTimeout(() => setWindowScroll(getScroll(event)), 200);
            } else {
                setWindowScroll(getScroll(event));
            }
        };

        const $scrollContainer = document.querySelector('.scroll-container');
        setTimeout(()=> $scrollContainer.addEventListener("scroll", handleScroll), 400);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return windowScroll;
}
