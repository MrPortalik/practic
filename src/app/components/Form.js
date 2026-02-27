import React from 'react'

const Form = () => {
  return (
    <div id="form">
        
        <div className="formContainer">
            <button className="closeForm">
                <span></span>
                <span></span>
            </button>

            <form method="get">
                <h2>Enter contact data</h2>
                <label htmlFor="name">Enter your name</label>
                <input type="text" name="name" id="name" required />
                
                <label htmlFor="mail">Enter your e-mail</label>
                <input type="email" name="mail" id="mail" required />

                <label htmlFor="tel">Enter your phone number</label>
                <input type="tel" name="tel" id="tel" placeholder="+7 (___) ___-__-__" required />

                <p>What contact method do you prefer?</p>
                <div className="formContacts">
                    <label htmlFor="phone">Tel.</label>
                    <input type="radio" name="contact" value="phone" id="phone" required />

                    <label htmlFor="e-mail">Email</label>
                    <input type="radio" name="contact" value="e-mail" id="e-mail" required />
                </div>

                <label htmlFor="description">Enter your request</label>
                <textarea name="description" id="description" required></textarea>

                <button type="submit" name="submit" className="submit">Submit</button>
                <div className="bar"></div>
            </form>
        </div>
    </div>
  )
}

export default Form