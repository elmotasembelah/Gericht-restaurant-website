import React from "react";

import { SubHeading, MenuItem } from "../../components";
import { images, data } from "../../constants";
import "./SpecialMenu.css";

const SpecialMenu = () => {
    return (
        <section
            id="menu"
            className="section__padding app__specialMenu flex__center"
        >
            {/* title above the menu */}
            <div className="app__specialMenu-title ">
                <SubHeading
                    title={"Menu That Fits Your Pallete"}
                    orientation="center"
                />
                <h2 className="headtext__cormorant">Today's Special</h2>
            </div>
            {/* menu container */}
            <div className="app__specialMenu-menu">
                {/* wine content in menu */}
                <div className="app__specialMenu_menu_wine flex__center">
                    <h3 className="app__specialMenu_menu_heading">
                        Wine & Beer
                    </h3>
                    <div className="app__specialMenu_menu_items">
                        {data.wines.map((wine, index) => (
                            // console.log(wine.title);
                            <p>{wine.title}</p>
                            // <MenuItem
                            //     title={wine.title}
                            //     price={wine.price}
                            //     tags={wine.tags}
                            // />;
                        ))}
                    </div>
                </div>
                {/* cocktail img in menu */}
                <div className="app__specialMenu_menu_img">
                    <img src={images.menu} alt="wine" />
                </div>
                {/* cocktails contens in menu */}
                <div className="app__specialMenu_menu_cocktails flex__center">
                    <h3 className="app__specialMenu_menu_heading">Cocktails</h3>
                    <div className="app__specialMenu_menu_items">
                        {data.cocktails.map((cocktail, index) => (
                            <p> {cocktail.title}</p>
                        ))}
                    </div>
                </div>
            </div>
            <button className="custom__button">View More</button>
        </section>
    );
};

export default SpecialMenu;
