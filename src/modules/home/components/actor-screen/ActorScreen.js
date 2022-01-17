import Header1 from "../../../shared/components/header1/Header1";
import './ActorScreen.css';
import {useRef} from "react";
import useOnScreen from "../../../shared/hooks/useOnScreen";

export default function ActorScreen(){
    const firstScrollContentRef = useRef();
    const secondScrollContentRef = useRef();
    const thirdScrollContentRef = useRef();

    const isThirdScrollIntersected = useOnScreen(thirdScrollContentRef);
    const isSecondScrollIntersected = useOnScreen(secondScrollContentRef);
    const isFirstScrollIntersected = useOnScreen(firstScrollContentRef);

    console.log(isFirstScrollIntersected, isSecondScrollIntersected, isThirdScrollIntersected);

    const showFirstTextContent = isFirstScrollIntersected && !isSecondScrollIntersected && !isThirdScrollIntersected;
    const showSecondTextContent = isSecondScrollIntersected && !isThirdScrollIntersected;
    const showThirdTextContent = isThirdScrollIntersected;

    return <div className={'actor-screen'}>
        <div className={'text-container'}>
            <div>
                {showFirstTextContent && <Header1 className={`text-content1 text-open-animation`}>
                    Be weird, dumb, sexy, broken, whatever. Just not f&$!#g boring.
                </Header1>}
                {showSecondTextContent && <Header1 className={'text-content2 text-open-animation'}>
                    Second Content
                </Header1>}
                {showThirdTextContent && <Header1 className={'text-content3 text-open-animation'}>
                    Third Content
                </Header1>}
            </div>
            <div className={'image-modal' +
            `${showFirstTextContent ? ' first-part': ''}`+
            `${showSecondTextContent ? ' second-part': ''}`+
            `${showThirdTextContent ? ' third-part': ''}`}>
                <div className={'mash'} />
                <div className={'actor'} />
            </div>
        </div>
        <div className={`scroll-contents`}>
            <div ref={firstScrollContentRef} className={'scroll-content1'} />
            <div ref={secondScrollContentRef} className={'scroll-content2'} />
            <div ref={thirdScrollContentRef} className={'scroll-content3'} />
            <div ref={thirdScrollContentRef} className={'scroll-content4'} />
        </div>
    </div>
}
