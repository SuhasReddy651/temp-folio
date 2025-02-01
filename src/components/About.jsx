import React from "react";
import about from "../assets/images/About.jpg";
import { ABOUT_TEXT } from "../constants";
import { motion } from "framer-motion";

const Container1 = (delay) => ({
  hidden: { x: -400, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 1, delay: delay },
  },
});

const About = () => {
  return (
    <section id="about" className="pt-24">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="mb-20 text-center text-4xl"
      >
        About <span className="text-neutral-500">Me</span>
      </motion.h1>
      <div className="flex flex-wrap mb-60">
        {" "}
        {/* Changed mb-40 to mb-60 for more bottom space */}
        <motion.div
          whileInView={{ opacity: 1, x: 100 }}
          initial={{ opacity: 0, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="w-full lg:w-1/2 lg:p-8"
        >
          <div className="flex items-center justify-start">
            <img className="size-2/3 rounded-2xl" src={about} alt="Fun" />
          </div>
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="w-full lg:w-1/2"
        >
          <div className="flex h-full items-center px-8">
            <div className="space-y-6 text-neutral-400">
              {ABOUT_TEXT.map((text, index) => (
                <div key={index} className="max-w-2xl">
                  <p className="mb-4">
                    {text.p1.split("**").map((part, i) =>
                      i % 2 === 0 ? (
                        part
                      ) : (
                        <span key={i} className="font-bold">
                          {part}
                        </span>
                      )
                    )}
                  </p>
                  <p className="mb-4">
                    {text.p2.split("**").map((part, i) =>
                      i % 2 === 0 ? (
                        part
                      ) : (
                        <span key={i} className="font-bold">
                          {part}
                        </span>
                      )
                    )}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
