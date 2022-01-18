import './Header2.css';

export default function Header2({children, className, style={}}){
    console.log(style);
    return <h2 className={`${className} header2`} style={{color:'red', ...style}}>
        {children}
    </h2>
}
