import logo from '/icon.svg'

export function Header (){
    return (
        <a href="https://xolving.com" target="_blank">
            <img src={logo} className="logo" alt="xolving logo" />
        </a>
    )
}