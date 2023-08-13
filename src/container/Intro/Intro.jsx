import React, { useRef, useState } from "react";
import { BsFillPlayFill, BsPauseFill } from "react-icons/bs";

import "./Intro.css";
import { meal } from "../../constants";

const Intro = () => {
    const [playVideo, setPlayVideo] = useState(false);
    const vidRef = useRef();

    const handleVideo = () => {
        if (playVideo) {
            vidRef.current.pause();
        } else {
            vidRef.current.play();
        }

        setPlayVideo((prev) => !prev);
    };

    return (
        // video
        <section className="app__video">
            <video
                ref={vidRef}
                src={meal}
                typeof="video/mp4"
                loop
                muted
                controls={false}
            ></video>
            <div className="app__video-overlay flex__center">
                <div
                    className="app__video-overlay_circle flex__center"
                    onClick={handleVideo}
                >
                    {playVideo ? (
                        <BsPauseFill color="#fff" fontSize={30} />
                    ) : (
                        <BsFillPlayFill color="#fff" fontSize={30} />
                    )}
                </div>
            </div>
        </section>
    );
};

export default Intro;
