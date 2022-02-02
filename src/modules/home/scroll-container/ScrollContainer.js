import './ScrollContainer.css';
import StickyView from "../sticky-view/StickyView";
import React, {useState} from "react";
import Header from "../../../layout/header/Header";
import SideText from "../../../layout/side-text/SideText";
import Footer from "../../../layout/footer/Footer";

export const FONT_COLORS = {
    BLACK: 'black',
    WHITE: 'white'
};

export default function ScrollContainer({children}) {
    const [fontColor, setFontColor] = useState(FONT_COLORS.BLACK);

    return <div className={'scroll-container'}>
        {(Array.isArray(children) ? children : [children]).map((child, index) => {
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
                {/*{!hideHeaderFooter ? <>*/}
                {/*        <Header fontColor={fontColor} index={index}/>*/}
                {/*        <SideText fontColor={fontColor} index={index}/>*/}
                {/*        <Footer fontColor={fontColor} index={index}/>*/}
                {/*    </>:null}*/}
                {React.cloneElement(child, {...props, scrollContainerHeight, setFontColor})}
            </StickyView>
        })}
    </div>
}
