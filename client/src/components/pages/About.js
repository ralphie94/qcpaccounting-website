import React from "react";
import "./About.css";

function About() {
    return (
        <div className="about">
            <h1>About Us</h1>
            <div className="about-container">
                <div className="section-one">
                    <div className="section-one-image">
                        <img className="catalina" src="images/catalina.png" alt="" />
                        <p>Catalina Cassity - <br/> Partner</p>
                    </div>
                    <div className="section-one-text">
                        <p>Our expert bookkeeper, helping our clients get their bookkeeping in shape and taking it off their plate going forward. Catalina got her start in bookkeeping when she assisted her parents with the bookkeeping for their business tax client. Since that time, she has become Quickbooks certified and is incredibly knowledgeable when it comes to quirky bookkeeping things (like those pesky Undeposited Funds). When Catalina is not working on your bookkeeping, she enjoys spending time with her 3 boys and husband going to the snowy mountains and traveling. </p>
                    </div>
                </div>
                <div className="section-two">
                    <div className="section-two-image">
                        <img className="jennifer" src="images/jen.png" alt="" />
                        <p>Jennifer Castellanos, EA Partner</p>
                    </div>
                    <div className="section-two-text">
                        <p>Our tax specialist and insurance agent, assisting clients with IRS and FTB tax problems. Jennifer found her passion by helping clients with problems and saving them money. Went to College and became a paralegal in 2008, an IRS Enrolled Agent in 2010 and an Insurance Agent in 2011. Now she is fully equipped and has the knowledge to resolve an issue a client may have and to save them money on their insurance. When Jennifer isn't saving you money, her main purpose in life is to be with her family and friends, eating good food, traveling and loving life. </p>
                    </div>
                </div>
                <div className="section-three">
                    <div className="section-three-image">
                        <img className="david" src="images/david.png" alt="" />
                        <p>David Quimbayo, EA- Partner</p>
                    </div>
                    <div className="section-three-text">
                        <p>Our soon to be certified Public Accountant, David is helping clients grow their business while he helps them get their books and tax situation in order. David has always strived to learn about things that can help others and himself as a small business owner himself. Went to Loyola Marymount University and received his BA in History. David realized he wanted to become a CPA and continued his education in UCLA where he received his degree in Accounting. When David isn't studying and helping you grow, he is with his Family and always looking for the next best opportunity for everyone around him. He enjoys nice and fast cars and traveling. </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;