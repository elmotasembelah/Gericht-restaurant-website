import React from "react";

import "./FooterOverlay.css";

const FooterOverlay = () => (
    <div
        className="app__footeroverlay"
        // style={{ backgroundColor: "red", height: "100px" }}
    >
        <div className="app__footeroverlay-black"></div>
        <div className="app__footeroverlay-img app__bg"></div>
    </div>
);

export default FooterOverlay;
