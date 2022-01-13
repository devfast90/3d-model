import './Header1.css';

export default function Header1({children, className}){
    return <h1 className={`${className} header1`}>
        {children}
    </h1>
}
