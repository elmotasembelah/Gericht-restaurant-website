import React from "react";

import SubHeading from "../SubHeading/SubHeading";
import "./Newsletter.css";

const Newsletter = () => {
    return (
        <div className="app__newsletter">
            <div className="app__newsletter-heading">
                <SubHeading title="Newsletter"></SubHeading>
                <h2 className="headtext__cormorant">
                    Subscribe To Our Newsletter
                </h2>
                <p className="p__opensans">
                    And Never Miss The Latest Updates!
                </p>
            </div>
            <div className="app__newsletter-input flex__center">
                <input type="email" placeholder="Enter your e-mail address" />
                <button className="custom__button">Subscribe</button>
            </div>
        </div>
    );
};

export default Newsletter;
