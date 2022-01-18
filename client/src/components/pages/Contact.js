import React from "react";
import "./Contact.css";

function Contact() {
    return (
        <div className="contact">
            <h1>Contact Us</h1>
            <div className="contact-container">
                <form>
                    <input className="input-box" placeholder="First Name" type="text" />
                    <input className="input-box" placeholder="Last Name" type="text" />
                    <input className="input-box" placeholder="Phone Number" type="text" />
                    <input className="input-box" placeholder="Email" type="text" />
                    <textarea className="message-box" placeholder="Message" type="text" />
                </form>
            </div>
        </div>
    )
}

export default Contact;