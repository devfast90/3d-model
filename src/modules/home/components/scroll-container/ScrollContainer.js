import './ScrollContainer.css';
import StickyView from "../sticky-view/StickyView";

export default function ScrollContainer({children}){
    return <div className={'scroll-container'}>
        {children.map((child)=>{
        return <StickyView>
            {child}
        </StickyView>
        })}
    </div>
}
