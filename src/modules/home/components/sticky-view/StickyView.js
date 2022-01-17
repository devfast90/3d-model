import './StickyView.css';

export default function StickyView({children}){
    return <div className={'sticky-view-container'}>
        <div className={'sticky-view'}>
            {children}
        </div>
    </div>
}
