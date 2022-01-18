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
                    <a href="https://www.instagram.com/qcpaccounting/?hl=en" target="_blank" rel="noreferrer"><i className="fab fa-instagram"></i></a>
                    <a href="https://www.yelp.com/biz/qcp-accounting-hawthorne" target="_blank" rel="noreferrer"><i className="fab fa-yelp"></i></a>
                </div>
            </div>
        </div>
    )
}

export default Footer;