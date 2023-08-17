import React from "react";

import "./FindUs.css";
import { SubHeading } from "../../components";
import { images } from "../../constants";

const FindUs = () => {
    return (
        <section
            className="section__padding app__bg app__wrapper flex__center"
            id="contact"
        >
            <div className="app__wrapper_info">
                <SubHeading title={"Contant"}></SubHeading>
                <h2 className="headtext__cormorant">Find Us</h2>
                <p className="p__opensans">
                    Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 75G
                </p>
                <p
                    className="p__cormorant"
                    style={{
                        marginBlock: "2rem",
                        color: "var(--color-golden)",
                    }}
                >
                    Opening Hours
                </p>
                <p className="p__opensans">Mon - Fri: 10:00 Am - 02:00 Am</p>
                <p className="p__opensans">Sat - Sun: 10:00 Am - 03:00 Am</p>
                <button
                    className="custom__button"
                    style={{ marginTop: "2rem" }}
                >
                    Visit Us
                </button>
            </div>
            <div className="app__wrapper_img">
                <img src={images.findus} alt="chilly drink" />
            </div>
        </section>
    );
};

export default FindUs;
