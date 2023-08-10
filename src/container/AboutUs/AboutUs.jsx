import React from "react";

import { images } from "../../constants";
import "./AboutUs.css";

const AboutUs = () => {
    return (
        <section
            className="section__padding app__bg app__aboutus flex__center"
            id="about"
        >
            {/* underlay image */}
            <div className="app__aboutus-underlay flex__center">
                <img src={images.G} alt="g letter" />
            </div>

            {/* the section content */}
            <div className="app__aboutus-content flex__center">
                {/* about us content */}
                <div className="app__aboutus-content_about">
                    <h1 className="headtext__cormorant">About Us</h1>
                    <img
                        src={images.spoon}
                        alt="spoon"
                        className="spoon__img"
                    />
                    <p className="p__opensans" style={{ margin: "2rem 0" }}>
                        Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit.
                        Quis Pharetra Adipiscing Ultrices Vulputate Posuere
                        Tristique. In Sed Odio Nec Aliquet Eu Proin Mauris Et.
                    </p>
                    <button className="custom__button">Know More</button>
                </div>

                {/* knife */}
                <div className="app__aboutus-content_knife flex__center">
                    <img src={images.knife} alt="knife" />
                </div>

                {/* our history content */}
                <div className="app__aboutus-content_history ">
                    <h1 className="headtext__cormorant">Our Histrory</h1>
                    <img
                        src={images.spoon}
                        alt="spoon"
                        className="spoon__img"
                    />
                    <p className="p__opensans" style={{ margin: "2rem 0" }}>
                        Adipiscing Tempus Ullamcorper Lobortis Odio Tellus Arcu
                        Volutpat. Risus Placerat Morbi Volutpat Habitasse
                        Interdum Mi Aliquam In Sed Odio Nec Aliquet.
                    </p>
                    <button className="custom__button">Know More</button>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;
