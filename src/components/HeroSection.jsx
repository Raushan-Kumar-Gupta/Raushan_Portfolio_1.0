"use client";
import "../styles/herosection.scss";
import UseAnimations from "react-useanimations";
import download from "react-useanimations/lib/download";
import github from "react-useanimations/lib/github";
// import Jump from "react-reveal/Jump";
// import Zoom from "react-reveal/Zoom";
import { motion } from "framer-motion";
import { useState, useEffect, useMemo } from "react";
import "animate.css";

const HeroSection = () => {
  //   const jsonData = `res.status(200).json({
  //     greeting: 'Hello Peps!👋',
  //     data: {
  //       desc: 'welcome to my profile',
  //       message: 'Meet a geeky guy!👨 and tech enthusiast 🧑‍💻',
  //     },
  //   })`;

  // const notify = () =>
  //     toast("🦄 Wow so easy!", {
  //         position: "top-right",
  //         autoClose: 5000,
  //         hideProgressBar: false,
  //         closeOnClick: true,
  //         pauseOnHover: true,
  //         draggable: true,
  //         progress: undefined,
  //         theme: "light",
  //     });

  const [content, setContent] = useState({
    span1: "Web",
    span2: "App",
  });

  const handleHover = (span) => {
    if (span === "span1") {
      setContent({ span1: "App", span2: "Web" });
    } else if (span === "span2") {
      setContent({ span1: "Web", span2: "App" });
    }
  };

  const contentArray = useMemo(
    () => ["Hello", "Holla", "Ciao", "Bonjour", "Namaste"],
    []
  );
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentContent, setCurrentContent] = useState(
    contentArray[currentIndex]
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % contentArray.length);
    }, 500);

    return () => {
      clearInterval(interval);
    };
  }, [contentArray.length]);

  useEffect(() => {
    setCurrentContent(contentArray[currentIndex]);
  }, [currentIndex, contentArray]);

  const [isResumeHovered, setResumeHovered] = useState(false);
  const [isGithubHovered, setGithubHovered] = useState(false);

  const handleResumeMouseEnter = () => {
    setResumeHovered(true);
  };

  const handleResumeMouseLeave = () => {
    setResumeHovered(false);
  };

  const handleGithubMouseEnter = () => {
    setGithubHovered(true);
  };

  const handleGithubMouseLeave = () => {
    setGithubHovered(false);
  };

  return (
    <div id="hero" className="container">
      {/* <HeroParticle /> */}

      {/* <Blob /> */}
      {/* <Jump> */}
      <motion.p
        className="sub-heading"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <span className="font-bold text-gray-700">{currentContent}</span>
        {`👋, I'm Raushan Gupta and I'm a`}
      </motion.p>
      {/* </Jump> */}
      <h1 className="main_line animate__animated animate__tada">
        <span className="span-1" onMouseEnter={() => handleHover("span1")}>
          {content.span1}
        </span>{" "}
        /{" "}
        <span
          className="span-2"
          onMouseEnter={() => handleHover("span2")}
          // onMouseLeave={handleHover}
        >
          {content.span2}
        </span>{" "}
        Developer <br />
        Building Digital Fantasies
      </h1>
      {/* <Zoom bottom> */}
      <motion.p
        className="desc"
        initial={{ opacity: 0, scale: 0.9, y: 40 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        I love designing and building beautiful and highly functional
        applications. <br /> I am a self-taught developer and I am always
        looking for new opportunities to learn and grow. <br />
        Love bringing ideas to life through code and design. {`Let's`}
        create something extraordinary together! 🛠️
      </motion.p>
      {/* </Zoom> */}

      <div className="button_section">
        <a
          href="https://drive.google.com/file/d/10wbU5WmTtCcob_R_fm4zOq4cfWhfeSv4/view?usp=drive_link"
          className="download-btn"
          download="Raushan_Resume"
          target="_blank"
          rel="noreferrer" // <-- Added for security
          onMouseEnter={handleResumeMouseEnter}
          onMouseLeave={handleResumeMouseLeave}
        >
          Resume
          <UseAnimations
            animation={download}
            size={24}
            autoplay={true}
            loop={true}
            fillColor={!isResumeHovered ? "#242424" : "#f0c371"}
            strokeColor={!isResumeHovered ? "#242424" : "#f0c371"}
          />
        </a>
        {/* eslint-disable-next-line*/}
        <a
          href="https://github.com/Raushan-Kumar-Gupta"
          target="_blank"
          rel="noreferrer" // <-- Added for security
          className="my-work-btn"
          onMouseEnter={handleGithubMouseEnter}
          onMouseLeave={handleGithubMouseLeave}
        >
          Github
          <UseAnimations
            animation={github}
            size={24}
            autoplay={true}
            loop={true}
            fillColor={!isGithubHovered ? "#242424" : "#f0c371"}
            strokeColor={!isGithubHovered ? "#242424" : "#f0c371"}
          />
        </a>
      </div>
      <div className="pattern-img"></div>
    </div>
  );
};

export default HeroSection;
