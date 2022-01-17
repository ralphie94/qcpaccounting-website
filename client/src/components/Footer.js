import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <div className="footer-container">
            <div className="footer-links">
                <a href="/" className="footer-link">Home</a>
                <a href="/" className="footer-link">Contact</a>
            </div>
            <div className="website-logos">
                <img className="footer-logo" src="images/qcpa-logo.png" alt="" />
                <img className="footer-title" src="images/qcpa.png" alt="" />
                <p>Follow Us On</p>
                <div className="social-icons">
                    <i class="fab fa-instagram"></i>
                    <i class="fab fa-yelp"></i>
                </div>
            </div>
        </div>
    )
}

export default Footer;