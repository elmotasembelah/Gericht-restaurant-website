// works as the main of the react app

// link for design
// https://ui8.net/iqonicdesign/products/gericht-restaurant-website-ui-in-figma

import React from "react";

import {
    AboutUs,
    Chef,
    FindUs,
    Footer,
    Gallery,
    Header,
    Intro,
    Laurels,
    SpecialMenu,
} from "./container";
import { Navbar } from "./components";
import "./App.css";

const App = () => (
    <div>
        <Navbar />
        <Header />
        <AboutUs />
        <SpecialMenu />
        <Chef />
        <Intro />
        <Laurels />
        <Gallery />
        <FindUs />
        <Footer />
    </div>
);

export default App;
