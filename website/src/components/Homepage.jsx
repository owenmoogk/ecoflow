import { Link } from "react-router-dom";

export default function Homepage(props) {
    return (
        <div id='homepage'>
            <div id='titleContainer'>
                <h1 id='title'>EcoFlow</h1>
            </div>
            <p className='subtitle'>Integrated Water Monitoring System.</p>
            <Link to='/solution' ><button id='contactButton'>Learn More</button></Link>
            <p className='desc'>Our journey is just starting. <br /> And you can help.</p>

            <p><Link to='/contact'>Contact Us</Link></p>

            <img src='storyboard.png' />
        </div>
    )
}