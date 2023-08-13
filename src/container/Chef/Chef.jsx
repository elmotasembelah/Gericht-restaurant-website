import React from "react";

import "./Chef.css";
import { images } from "../../constants";
import { SubHeading } from "../../components";

const Chef = () => {
    return (
        <section className="section__padding app__wrapper app__bg flex__center">
            {/* content */}
            <div className="app__chef_content flex__center">
                {/* chef's img */}
                <div className="app__chef_img ">
                    <img src={images.chef} alt="smiling chef" />
                </div>
                {/* info content */}
                <div className="app__chef-info app__wrapper_info">
                    {/* header */}
                    <div className="app__chef_info_heading">
                        <SubHeading title={"chef's word"}></SubHeading>
                        <h1
                            className="headtext__cormorant"
                            style={{ color: "var(--color-golden)" }}
                        >
                            What We Believe In
                        </h1>
                    </div>
                    {/* quote */}
                    <div className="app__chef_info_quote">
                        <img src={images.quote} alt="Quote" />
                        <p className="p__opensans">
                            Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing
                            Elit Auctor Sit .
                        </p>
                    </div>
                    <p className="p__opensans">
                        Auctor Sit Iaculis In Arcu. Vulputate Nulla Lobortis
                        Mauris Eget Sit. Nulla Scelerisque Scelerisque Congue Ac
                        Consequat, Aliquam Molestie Lectus Eu. Congue Iaculis
                        Integer Curabitur Semper Sit Nunc.
                    </p>
                    {/* info sign */}
                    <div className="app__chef_info_sign">
                        <p>Kevin luo</p>
                        <p className="p__opensans">Chef & Founder</p>
                        <img src={images.sign} alt="chef's signeture" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Chef;
