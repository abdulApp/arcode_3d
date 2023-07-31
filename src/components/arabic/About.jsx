import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../../styles";
import { servicesAR } from "../../constants";
// import { servicesAr}
import { SectionWrapper } from "../../hoc";
import { fadeIn, textVariant } from "../../utils/motion";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", index * 0.5, 0.75)}
        className="w-full bg-gradient-to-r from-[#ff8625] to-[#48A9A6] p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{ max: 45, scale: 1, speed: 450 }}
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
};

const About = () => {
  return (
    <>
      <div className="" dir="rtl">
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>مقدمة</p>
          <h2 className={styles.sectionHeadText}>نبذه عني</h2>
        </motion.div>

        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-4 text-secondary text-[17px] text-center leading-[30px]"
          //  max-w-3xl
        >
          مهندس برمجيات متخصص وماهر اتمتع بخلفية تعليمية قوية وخبرة مهنية.  تخرجت من جامعة شمال أريزونا مع التركيز على هندسة البرمجيات.
            اتقن العديد من لغات البرمجة وأطر العمل، 
            بما في ذلك HTML و CSS و JavaScript (ReactJS و React Native و Express و Node.js) و C و C ++ و Python (Django و Flask). اتفوق في تطوير تطبيقات الويب 
            والجوّال مع معرفة جيدة بقواعد البيانات باستخدام SQL و NoSQL، مع سجل حافل بإكمال المشاريع بنجاح.  عضوء فعال في الفريق ومتحمس اتمتع بمهارات ممتازة في حل المشكلات ومهارات الاتصال
        </motion.p>

        <motion.div variants={textVariant()}>
          <br />
          <h2 className={styles.sectionHeadText}>التعليم</h2>
        </motion.div>

        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-4 text-secondary text-[17px] text-right leading-[30px]"
          //  max-w-3xl
          
        >
          - بكالوريوس في <span className="font-bold">علوم الكمبيوتر</span> من <span className="font-bold">جامعة شمال اريزونا</span> "2021"
        </motion.p>

        <div className="mt-20 flex flex-wrap gap-10 justify-center">
          {servicesAR.map((service, index) => (
            <ServiceCard key={service.title} index={index} {...service} />
          ))}
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
