import React, { useState } from "react";

import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";

import images from "../../constants/images";
import "./Navbar.css";

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);

    return (
        <nav className="app__navbar">
            {/* logo */}
            <div>
                <a href="/" className="app__navbar-logo">
                    <img src={images.gericht} alt="Gericht logo" />
                </a>
            </div>
            {/* large screen */}
            {/* large screen center menu */}
            <ul className="app__navbar-links">
                <li className="p__opensans">
                    <a href="#Home">Home</a>
                </li>
                <li className="p__opensans">
                    <a href="#about">about</a>
                </li>
                <li className="p__opensans">
                    <a href="#menu">menu</a>
                </li>
                <li className="p__opensans">
                    <a href="#awards">awards</a>
                </li>
                <li className="p__opensans">
                    <a href="#contact">Contact</a>
                </li>
            </ul>

            {/* large screen right menu  */}
            <div className="app__navbar-book">
                <a href="#book" className="p__opensans">
                    Book Table
                </a>
                <div></div>
                <a href="/" className="p__opensans">
                    Newsletter Register
                </a>
            </div>

            {/* small screen  */}
            <div className="app__navbar-smallscreen">
                {/* hamburger menu icon */}
                <GiHamburgerMenu
                    color="#fff"
                    className="overlay-open"
                    fontSize={27}
                    onClick={() => {
                        setToggleMenu(true);
                    }}
                />
                {toggleMenu && (
                    <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
                        <MdOutlineRestaurantMenu
                            fontSize={27}
                            className="overlay-close"
                            onClick={() => {
                                setToggleMenu(false);
                            }}
                        />
                        <ul className="app__navbar-smallscreen_links ">
                            <li className="p__opensans">
                                <a href="#Home">Home</a>
                            </li>
                            <li className="p__opensans">
                                <a href="#about">about</a>
                            </li>
                            <li className="p__opensans">
                                <a href="#menu">menu</a>
                            </li>
                            <li className="p__opensans">
                                <a href="#awards">awards</a>
                            </li>
                            <li className="p__opensans">
                                <a href="#contact">Contact</a>
                            </li>
                        </ul>
                        <div className="app__navbar-smallscreen_book ">
                            <a href="#book" className="p__opensans">
                                Book Table
                            </a>
                            <a href="/" className="p__opensans">
                                Newsletter Register
                            </a>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
