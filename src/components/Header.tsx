import './Header.css'
import tutorics from '/tutorics.svg'

export function Header (){
    return (
        <>
            <a href="https://xolving.com" target="_blank">
                <img src={tutorics} className="logo" alt="xolving logo" />
            </a>
        </>
    )
}