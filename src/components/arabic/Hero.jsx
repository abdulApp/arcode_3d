import { motion } from "framer-motion";

import { styles } from "../../styles";
import { ComputersCanvas } from "../canvas";
import { arcode } from "../../assets";

const Hero = () => {
  return (
    <>
      <section className={`relative w-full h-screen mx-auto`} dir="rtl">
        <div className="flex flex-row sm:flex-col">
          <div
            className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
            // dir="rtl"
          >
            <div className="flex flex-col justify-center items-center mt-5">
              <div className="flex flex-col justify-center items-center mt-5">
                <div className="w-5 h-5 rounded-full bg-[#48A9A6]" />
                <div className="w-1 sm:h-80 h-40 bg-[#ff8625]" />
              </div>
            </div>

            <div className="">
              <h1 className={`${styles.heroHeadText}`}>
                {" "}
                <br
                // className="sm:hidden"
                />
                مرحبا, <span className="text-[]">أنا</span>{" "}
                <span className="text-[#ff8625]">عبدالرحمن</span>
                <span className="text-[#ff8625]"></span>
              </h1>
              <p className={`${styles.heroSubText} mt-2 text-[#48A9A6]`}>
                مهندس برمجيات ، مصمم واجهات <br className="sm:hidden block" />{" "}
                مستخدم احترافية، مصمم ومطور تطبيقات الويب والجوال
              </p>
              <br />
              <div className="flex">
                <button className="border rounded-lg m-2 p-2 cursor-pointer font-bold text-[#15c2ee] border-[#15c2ee] text-lg hover:bg-[#15c2ee] hover:text-black hover:border-black">
                  السيرة الذاتية
                </button>
                  <a href="#contact">
                    <div className="border rounded-lg m-2 p-2 cursor-pointer font-bold text-[#ff8625] border-[#ff8625] text-lg hover:bg-[#ff8625] hover:text-black hover:border-black">
                        تواصل معي
                    </div>
                  </a>
              </div>
            </div>
          </div>
        </div>
        <br />
        <div className="w-screen h-screen">
          <img
            src={arcode}
            className="f w-1/2 absolute top-[49%] right-[25%]"
            alt=""
          />
        </div>
        <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
          <a href="#about" alt="About me">
            <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
              <motion.dev
                animate={{
                  y: [0, 24, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  reportType: "loop",
                }}
                className="w-3 h-3 rounded-full bg-secondary mb-1"
              />
            </div>
          </a>
        </div>
      </section>
    </>
  );
};

export default Hero;

{
  /* <div
className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
>
<div className="flex flex-col justify-center items-center mt-5">
  <div className="w-5 h-5 rounded-full bg-[#915eff]" />
  <div className="w-1 sm:h-80 h-40 violet-gradient" />
</div>

</div>
*/
}
