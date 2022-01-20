import React, { Component } from "react";
import emailjs from "emailjs-com";
import "./Contact.css";
import MapContainer from "../GoogleMap";

class Contact extends Component {
    state = {
        fullName: "",
        phoneNumber: "",
        email: "",
        message: "",
        sent: false
    }

    handleName = (e) => {
        this.setState({
            fullName: e.target.value
        });
    };

    handlePhonenumber = (e) => {
        this.setState({
            phoneNumber: e.target.value
        });
    };

    handleEmail = (e) => {
        this.setState({
            email: e.target.value
        });
    };

    handleMessage = (e) => {
        this.setState({
            message: e.target.value
        });
    };

    formSubmit = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            "service_uld0xzt", 
            "template_34utv6j", 
            e.target, 
            "user_AmX89CZxCh7EJWOzZZVfD"
        ).then(res => {
            console.log(res);
            this.resetForm();
        }).catch(err => console.log(err));
    };

    resetForm = () => {
        this.setState({
            fullName: "",
            phoneNumber: "",
            email: "",
            message: "",
            sent: true
        })
    }

    render() {
        const { fullName, phoneNumber, email, message } = this.state;
        return (
            <div className="contact">
                <h1>Contact Us</h1>
                <div className="contact-container">
                    <form onSubmit={this.formSubmit} autoComplete="off"> 
                        <input className="input-box" value={fullName} onChange={this.handleName} placeholder="Full Name" type="text" name="name" />
                        <input className="input-box" value={phoneNumber} onChange={this.handlePhonenumber} placeholder="Phone Number" type="tel" name="number" />
                        <input className="input-box" value={email} onChange={this.handleEmail} placeholder="Email" type="email" name="user_email" required />
                        <textarea className="message-box" value={message} onChange={this.handleMessage} placeholder="Message" type="text" name="message" />
                        <div className={this.state.sent ? "msg msgAppear" : "msg"}>Message has been sent.</div>
                        <button className="submit-btn" type="submit" value="submit">Submit</button>
                    </form>
                    <img className="map" src="images/map.png" alt="" />
                </div>
            </div>
        );
    }
}

export default Contact;