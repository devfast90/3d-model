import './ScrollContainer.css';
import StickyView from "../sticky-view/StickyView";
import React from "react";
import Header from "../../../layout/header/Header";
import SideText from "../../../layout/side-text/SideText";
import Footer from "../../../layout/footer/Footer";

export default function ScrollContainer({children}) {
    return <div className={'scroll-container'}>
        {(Array.isArray(children) ? children : [children]).map((child) => {
            const {
                props: {scrollContainerHeight = '300vh', contentHeight = '100vh', hideHeaderFooter},
                props,
                type: {name: contentType}
            } = child;
            return <StickyView
                scrollContainerHeight={scrollContainerHeight}
                key={contentType}
                contentHeight={contentHeight}
            >
                {!hideHeaderFooter ? <>
                        {/*<Header/>*/}
                        <SideText/>
                        <Footer/>
                    </>:null}
                {React.cloneElement(child, {...props, scrollContainerHeight})}
            </StickyView>
        })}
    </div>
}
