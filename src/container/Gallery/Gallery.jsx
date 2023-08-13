import React from "react";

import "./Gallery.css";
import { SubHeading } from "../../components";

const Gallery = () => {
    return (
        <section className="section__padding app__wrapper app__gallery flex__center">
            <div className="app__wrapper_info">
                <SubHeading title={"Instagram"}></SubHeading>
                <p className="headtext__cormorant">Photo Gallery</p>
                <p className="p__opensans" style={{ marginTop: "2rem" }}>
                    Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit.
                    Volutpat Mattis Ipsum Turpis Elit Elit Scelerisque Egestas
                    Mu.
                </p>
                <button
                    className="custom__button"
                    style={{ marginTop: "1rem" }}
                >
                    View More
                </button>
            </div>
        </section>
    );
};

export default Gallery;
