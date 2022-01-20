import React from "react";
import "./Tax.css";

function Tax() {
    return (
        <div className="tax">
            <h1>Tax Services</h1>
            <div className="tax-container">
                <p>QCPAccounting provides customized tax preparation services. Our education in taxation enables us to accurately and efficiently prepare returns for individuals and various types of entities including emerging start-ups, partnerships, businesses, and self-employed individuals.</p> <br />
                <p>When IRS representation is needed, each of our accountants has the experience to successfully represent you and your company. Through years of experience dealing with many taxing authorities, we can ensure that our clients are properly represented before various federal and state tax agencies.</p>
                <a href="/contact-us"><button className="contact-btn" type="submit">Contact Us</button></a>
            </div>
        </div>
    )
};

export default Tax;