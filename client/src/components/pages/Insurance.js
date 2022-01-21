import React from "react";
import "./Insurance.css";

function Insurance() {
    return (
        <div className="tax">
            <h1>Insurance Services</h1>
            <div className="tax-container">
                <p>We are an independent insurance agency licensed with several different insurance companies. Our goal is to provide excellent customer service with coverages at an affordable rate.</p> <br />
                <p>If you are looking for personal, commercial, or financial insurance services, this is the place to find it all. We offer all types of personal insurance coverages including Auto, homeowners, motorcycle, boat, life and health.</p> <br />
                <p>We also offer a wide variety of business insurance plans for your commercial auto, work comp, business owners packages, and general liability needs.</p>
                <a href="/contact-us"><button className="contact-btn" type="submit">Contact Us</button></a>
            </div>
        </div>
    )
};

export default Insurance;