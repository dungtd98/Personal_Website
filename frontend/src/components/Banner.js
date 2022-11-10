import React, { useState, useEffect } from "react";
import Astro from "../assets/img/Astro.png";
import { Fade } from "react-awesome-reveal";

const Banner = () => {
    const rotateText = ["Web developer", "Web designer", "UI/UX designer"];
    const [loopIndex, setLoopIndex] = useState(0);
    const [text, setText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    const [period, setPeriod] = useState(500)
    let tick = () => {
        let fullText = rotateText[loopIndex % rotateText.length];
        let updatedText = isDeleting
            ? fullText.substring(0, text.length - 1)
            : fullText.substring(0, text.length + 1);
        setText(updatedText);
        if(isDeleting){
            setPeriod(prevPeriod=>prevPeriod/1.5)
        }
        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setPeriod(2000)
        } else if (isDeleting && updatedText === "") {
            setLoopIndex((index) => index + 1);
            setIsDeleting(false);
            setPeriod(500)
        }
    };

    useEffect(() => {
        let interval = setInterval(() => {
        tick();
        }, period);
        return () => {clearInterval(interval)};//eslint-disable-next-line
    }, [text]);
    
  return (
    <section className="banner" id="banner">
        <div className="row">
          <div className="about">
            <h1>
              Hello, I'm Dung. I'm a <span>{text}<span className='blink-cursor'>|</span></span>
            </h1>
            <p>I'm a junior web developer with 1 year experience</p>
            <button className="btn ">
              Contact me
            </button>
          </div>
          <div className="image" id='banner-img'>
            <Fade direction="down" duration={2000}>
              <img src={Astro} alt="" />
            </Fade>
           
          </div>
        </div>
    </section>
  );
};

export default Banner;
