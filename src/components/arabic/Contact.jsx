import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../../styles";
import { EarthCanvas } from "../canvas";
import { SectionWrapper } from "../../hoc";
import { slideIn } from "../../utils/motion";
import { RiTwitterXFill } from "react-icons/ri";
import { PiGithubLogo } from "react-icons/pi";
import { RiLinkedinFill } from "react-icons/ri";
// import { Globeee } from "../../desktop_pc/Globeee"

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  // a.alamoudi@idv.sa
  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_e79x3qc",
        "template_whlnbur",
        {
          from_name: form.name,
          to_name: "Abdul",
          from_email: form.email,
          to_email: "a.alamoudi@idv.sa",
          message: form.message,
        },
        "1CxwrftkVe4TzXnpV"
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <>
      <div
        className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden"
        dir="rtl"
      >
        <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}
          className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
        >
          <p className={styles.sectionSubText}>ابقى على تواصل</p>
          <h3 className={styles.sectionHeadText}>راسلني</h3>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-12 flex flex-col gap-8"
          >
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">الاسم</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="عبدالرحمن"
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              />
            </label>
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">
                البريد الالكتروني
              </span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="name@exapmle.com"
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              />
            </label>
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">رسالتك</span>
              <textarea
                rows={7}
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder=""
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              />
            </label>

            <button
              type="submit"
              className="bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary"
            >
              {loading ? "ارسال..." : "ارسال"}
            </button>
          </form>
        </motion.div>

        <motion.div
          variants={slideIn("right", "tween", 0.2, 1)}
          className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
        >
          <EarthCanvas />
        </motion.div>
      </div>
      <div className=" flex justify-between items-end h-[10vh] w-[10vw] mx-auto">
        <span className=" border p-0.5 rounded-lg h-[35px] w-[35px] flex justify-center items-center bg-[#312777]">
          <RiTwitterXFill />
        </span>
        <span className=" border p-0.5 rounded-lg h-[35px] w-[35px] flex justify-center items-center bg-[#312777]">
          <PiGithubLogo />
        </span>
        <span className=" border p-0.5 rounded-lg h-[35px] w-[35px] flex justify-center items-center bg-[#312777]">
          <RiLinkedinFill />
        </span>
      </div>
    </>
  );
};

export default SectionWrapper(Contact, "contact");
