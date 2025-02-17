import React, { useEffect, useState } from "react";
import { FaLinkedin, FaGithub, FaAngellist } from "react-icons/fa";
import { styles } from "../styles";
import { motion } from "framer-motion";
import "../index.css";
import House from "../canvas/girl";
import resume from "../assets/cv.pdf.pdf";

const Home = () => {
  const [active, setActive] = useState("");
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div className="w-11/12 mt-9 lg:pt-0 pt-20 md:mb-40 mb-20 mx-auto md:grid md:grid-cols-2 lg:w-10/12 z-0 flex items-center flex-col-reverse">
        <div className="flex flex-col justify-center">
          <h4 className={`${styles.sectionSubText}`}>Hi, I am</h4>
          <h1 className={`${styles.heroHeadText} heading`}>Soe Sandar Win</h1>
          <p className={`${styles.heroSubText} mt-1 text-stone-950`}>
            <span className="text">US Certified </span> Full Stack Software
            Engineer with 2 years of industry experience.
          </p>
          <ul className="list-none hidden sm:flex flex-row gap-5">
            <li>
              <a
                target="_blank"
                href="https://www.linkedin.com/in/soe-sandar-win/"
                className="text-xl mt-1"
                rel="noreferrer"
              >
                <FaLinkedin />
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://github.com/soesandarwin2201"
                className="text-xl mt-1"
                rel="noreferrer"
              >
                <FaGithub />
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://wellfound.com/u/soe-sandar-win"
                className="text-xl mt-1"
                rel="noreferrer"
              >
                <FaAngellist />
              </a>
            </li>
          </ul>
        </div>
        <div className="lg:h-[600px] md:h-[400px] h-[400px]  w-full flex items-center justify-center ">
          <House />
        </div>
      </div>
      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[30px] h-[50px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Home;
