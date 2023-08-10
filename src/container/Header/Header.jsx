import React from "react";

import "./Header.css";
import { images } from "../../constants";
import { SubHeading } from "../../components";

const Header = () => (
    <section className="section__padding app__wrapper app__header" id="home">
        <div className="app__wrapper_info">
            <SubHeading title="Chase the new flavour" />
            <h1 className="app__header-h1">The Key to Fine Dining</h1>
            <p className="p__opensans" style={{ margin: "2rem 0" }}>
                Sit Tellus Lobortis Sed Senectus Vivamus Molestie. Condimentum
                Volutpat Morbi Facilisis Quam Scelerisque Sapien. Et, Penatibus
                Aliquam Amet Tellus
            </p>
            <a href="#menu" type="button" className="custom__button">
                Explore Menu
            </a>
        </div>
        <div className="app__wrapper_img">
            <img src={images.welcome} alt="delicious food" />
        </div>
    </section>
);

export default Header;
