export default function Homepage(props) {
    return (
        <div id='homepage'>
            <div id='titleContainer'>
                <h1 id='title'>EcoFlow</h1>
            </div>
            <p className='subtitle'>Integrated Water Monitoring System.</p>
            <a href='/solution' ><button id='contactButton'>Learn More</button></a>
            <p className='desc'>Our journey is just starting. <br /> And you can help.</p>

            <p><a href='/contact'>Contact Us</a></p>

            <img src='storyboard.png' />
        </div>
    )
}