import React from 'react'
import "./Contact.css"

function Contact () {
  return (
    <div className='contact' >
        <form action="">
            <input type="text" placeholder='Name'  name='username' required/>
            <input type="email" placeholder='Email' name='email' required />
            <textarea name="message"  placeholder='Message'></textarea>
            <button>Submit</button>

        </form>
    </div>
  )
}

export default Contact