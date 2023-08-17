import React from "react";
import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";

import { images } from "../../constants";
import { FooterOverlay, Newsletter } from "../../components";
import "./Footer.css";

const Footer = () => {
    return (
        <section className="app__footer section__padding">
            <FooterOverlay />
            <Newsletter />
            {/* footer sections */}
            <div className="app__footer-links">
                {/* contact */}
                <div className="app__footer-links_contact">
                    <h2 className="app__footer-headtext">Contact Us</h2>
                    <p className="p__opensans">
                        9 W 53rd St, New York, NY 10019, USA
                    </p>
                    <p className="p__opensans">+1 212-344-1230</p>
                    <p className="p__opensans">+1 212-555-1230</p>
                </div>

                {/* logo */}
                <div className="app__footer-links_logo">
                    <img src={images.gericht} alt="Gericht" />
                    <p className="p__opensans">
                        "The Best Way To Find Yourself Is To Lose Yourself In
                        The Service Of Others."
                    </p>
                    <img
                        src={images.spoon}
                        alt="golden spoon"
                        className="spoon__img"
                        style={{ marginTop: "1rem" }}
                    />
                    <div className="app__footer-links_icons flex__center">
                        <FiFacebook />
                        <FiTwitter />
                        <FiInstagram />
                    </div>
                </div>
                {/* working hours */}
                <div className="app__footer-links_work">
                    <h2 className="app__footer-headtext">Working Hours</h2>
                    <p className="p__opensans">Monday-Friday:</p>
                    <p className="p__opensans">08:00 Am - 12:00 Am</p>

                    <p className="p__opensans">Saturday-Sunday:</p>
                    <p className="p__opensans">07:00 Am - 11:00 Pm</p>
                </div>
            </div>
            <div className="app__footer-copyright">
                <p className="p__opensans">
                    2021 Gericht. All Rights Reserved.
                </p>
            </div>
        </section>
    );
};

export default Footer;
