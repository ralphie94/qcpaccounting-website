import React from "react";
import "./ServicesCards.css";

function ServicesCards() {
    return (
        <div className="service-cards">
            <h1>Services</h1>
            <div className="cards-container">
                <div className="card-one">
                    <p>Tax</p>
                    <i className="fas fa-file-invoice-dollar"></i>
                </div>
                <div className="card-two">
                    <p>Bookkeeping</p>
                    <i className="fas fa-book-open"></i>
                </div>
                <div className="card-three">
                    <p>Paralegal</p>
                    <i className="fas fa-folder-open"></i>
                </div>
                <div className="card-four">
                    <p>Insurance</p>
                    <i className="fas fa-house-damage"></i>
                </div>
            </div>
        </div>
    )
}

export default ServicesCards;