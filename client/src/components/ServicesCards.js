import React from "react";
import "./ServicesCards.css";

function ServicesCards() {
    return (
        <div className="service-cards">
            <h1>Services</h1>
            <div className="cards-container">
                <div className="card-one">
                    <p>Tax</p>
                    <i className="fas fa-file-invoice-dollar" />
                </div>
                <div className="card-two"></div>
                <div className="card-three"></div>
                <div className="card-four"></div>
            </div>
        </div>
    )
}

export default ServicesCards;