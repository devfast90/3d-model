import './StickyView.css';

export default function StickyView({children, scrollContainerHeight}){
    return <div className={'sticky-view-container'} style={{height: scrollContainerHeight}}>
        <div className={'sticky-view'}>
            {children}
        </div>
    </div>
}
