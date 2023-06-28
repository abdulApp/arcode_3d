import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img
          src={icon}
          alt="web-development"
          className="w-16 h-16 object-contain"
        />

        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <div className="">
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>Introduction</p>
          <h2 className={styles.sectionHeadText}>Overview.</h2>
        </motion.div>

        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-4 text-secondary text-[17px] text-center leading-[30px]"
          //  max-w-3xl
        >
          Dedicated and skilled software engineer with a strong educational
          background and professional experience. Graduated from Northern
          Arizona University with a focus on software engineering. Proficient in
          various programming languages and frameworks, including HTML, CSS,
          JavaScript (ReactJS, React Native, Express, Node.js), C, C++, Python
          (Django, Flask). Excels in web and mobile app development with good
          knowledge in databases with SQL and NoSQL, with a track record of
          successfully completing projects. A motivated team player with
          excellent problem-solving and communication skills.
        </motion.p>

        <motion.div variants={textVariant()}>
          <br />
          <h2 className={styles.sectionHeadText}>Education.</h2>
        </motion.div>

        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-4 text-secondary text-[17px] text-left leading-[30px]"
          //  max-w-3xl
        >
          - Bachelor of Science in <span className="font-bold">Computer Science</span> from <span className="font-bold">Northern Arizona University</span> "2021"
        </motion.p>

        <div className="mt-20 flex flex-wrap gap-10 justify-center">
          {services.map((service, index) => (
            <ServiceCard key={service.title} index={index} {...service} />
          ))}
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
