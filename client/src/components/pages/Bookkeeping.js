import React from "react";
import "./Bookkeeping.css";

function Bookkeeping() {
    return (
        <div className="bookkeeping">
            <h1>Bookkeeping Services</h1>
            <p>Most business owners hire a bookkeeper when their books are a mess. At this point, there is not a proper accounting system in place, you are usually scrambling to get items together for 1099s, or taxes, and often end up paying triple what you would have paid, if done right from the beginning! Consulting a professional as soon as you establish your business, is the best way to avoid this situation. If you find yourself consistently overwhelmed with your accounting, call us! We help businesses setup the right accounting software for their business, provide in office support, and help streamline accounting procedures to help your business run smoothly.</p>
            <div className="industries-container">
                <h2>Industries We Serve</h2>
                <div className="industry-card-container">
                    <div className="first-row">
                        <div className="law-practices-card">
                            <p>Law Practices</p>
                        </div>
                        <div className="trucking-card">
                            <p>Trucking</p>
                        </div>
                        <div className="rental-properties-card">
                            <p>Rental Properties</p>
                        </div>
                        <div className="roofing-card">
                            <p>Roofing</p>
                        </div>
                    </div>
                    <div className="second-row">
                        <div className="restaurants-card">
                            <p>Restaurants</p>
                        </div>
                        <div className="retail-card">
                            <p>Retail</p>
                        </div>
                        <div className="real-estate-card">
                            <p>Real Estate</p>
                        </div>
                        <div className="medical-offices-card">
                            <p>Medical Offices</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Bookkeeping;