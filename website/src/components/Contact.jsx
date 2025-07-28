

export default function Contact(props) {
    return (
        <div id='ourTeam'>
            <p className='pageTitle'>Contact Us</p>
            <p>Got something to say? We would love to hear it. Just drop a line.</p>
            <form action="https://send.pageclip.co/4Ru6GZ2T8CCE5mMgwxPGYhtn955GxAIj" className="pageclip-form" method="post">
                <div id='name'>
                    <input type='text' placeholder='First Name' name='firstname' className='nameInput' />
                    <input type='text' placeholder='Last Name' name='lastname' className='nameInput' />
                </div>
                <input type='text' placeholder='Email' name='email' id='emailInput' />
                <input type='text' placeholder='Subject' name='subject' id='subjectInput' />
                <textarea type='text' placeholder='Message' name='message' id='messageInput' />
                <button type="submit" className="pageclip-form__submit">
                    <span>Send</span>
                </button>
            </form>
            <p>Or, you can send us an email at <a href='mailto:ecoflowcanada@gmail.com'>ecoflowcanada@gmail.com</a>.</p>

        </div>
    )
}