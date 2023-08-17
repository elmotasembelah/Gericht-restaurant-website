import React, { useRef } from "react";
import {
    BsInstagram,
    BsArrowLeftShort,
    BsArrowRightShort,
} from "react-icons/bs";

import "./Gallery.css";
import { SubHeading } from "../../components";
import { images } from "../../constants";

const Gallery = () => {
    const scrollRef = useRef(null);

    const scroll = (direction) => {
        const { current } = scrollRef;

        if (direction === "left") {
            console.log(`${direction} arrow clicked`);
            current.scrollLeft -= 330;
        } else {
            console.log(`${direction} arrow clicked`);
            current.scrollLeft += 330;
        }
    };

    const galleryImages = [
        images.gallery01,
        images.gallery02,
        images.gallery03,
        images.gallery04,
    ];

    return (
        <section className=" app__gallery flex__center">
            <div className="app__gallery-content">
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
            <div className="app__gallery-images">
                <div className="app__gallery-images_container" ref={scrollRef}>
                    {galleryImages.map((image, index) => (
                        <div
                            className="app__gallery-image_card flex__center"
                            key={`gallery-icon${index + 1}`}
                        >
                            <img src={image} alt="gallery" />
                            <BsInstagram className="gallery__image-icon" />
                        </div>
                    ))}
                </div>
                <div className="app__gallery-images_arrows">
                    <BsArrowLeftShort
                        className="gallery__arrow-icon"
                        onClick={() => scroll("left")}
                    />
                    <BsArrowRightShort
                        className="gallery__arrow-icon"
                        onClick={() => scroll("right")}
                    />
                </div>
            </div>
        </section>
    );
};

export default Gallery;
