import './ScrollContainer.css';
import StickyView from "../sticky-view/StickyView";
import React from "react";

export default function ScrollContainer({children}){
    return <div className={'scroll-container'}>
        {(Array.isArray(children)? children : [children]).map((child)=>{
            const {props: {scrollContainerHeight = '300vh'}, props, type: {name: contentType}} = child;
            return <StickyView scrollContainerHeight={scrollContainerHeight} key={contentType}>
                {React.cloneElement(child, { ...props, scrollContainerHeight })}
            </StickyView>
        })}
    </div>
}
