import { useState } from "react"

export default function Nav(props) {

    const [shown, setShown] = useState()

    window.addEventListener('click', (e)=>{
		if (shown && e.target === document.getElementById('nav')){
			setShown(false)
		}
	})

    window.onscroll = () => {
        if (shown && window.innerWidth <= 875){
            window.scrollTo(0,0)
        }
    }

    return (
        <>
            <svg id="navButton" onClick={() => {setShown(!shown); window.scrollTo(0,0);}} preserveAspectRatio="xMidYMid meet" viewBox="0 0 48 48" style={{height: '40px', width: '40px'}} stroke='black'>
                <g fill="none" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M7.95 11.95h32" />
                    <path d="M7.95 23.95h32" />
                    <path d="M7.95 35.95h32" />
                </g>
            </svg>
            <div id='nav' style={{display: shown ? 'flex' : ''}}>
                <a href='/'>Home</a>
                <a href='/our-team'>Our Team</a>
                <a href='/vision'>Vision</a>
                <a href='/solution'>Solution</a>
                <a href='/contact'>Contact Us</a>
            </div>
        </>
    )
}