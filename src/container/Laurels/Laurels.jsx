import React from "react";

import "./Laurels.css";
import { SubHeading } from "../../components/";
import { images, data } from "../../constants";

const AwardCard = ({ award: { imgUrl, title, subtitle } }) => {
    return (
        <div className="app__laurels-awards_awardcard">
            <img src={imgUrl} alt="award" />
            <div className="app__laurels-awardcard_content">
                <p className="p__cormorant">{title}</p>
                <p className="p__opensans">{subtitle}</p>
            </div>
        </div>
    );
};

const Laurels = () => {
    return (
        <section className="section__padding app__bg app__wrapper app__laurels flex__center">
            <div className="app__wrapper_info">
                <SubHeading title={"Awards & Recognition"}></SubHeading>
                <h2 className="headtext__cormorant">Our Laurels</h2>
                <div className="app__laurels-awards">
                    {data.awards.map((award) => (
                        <AwardCard key={award.title} award={award} />
                    ))}
                </div>
            </div>
            <div className="app__wrapper_img">
                =
                <img src={images.laurels} alt="tasty food" />
            </div>
        </section>
    );
};

export default Laurels;
