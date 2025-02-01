import React from "react";
import { HOME_CONTENT } from "../constants";
import photo from "../assets/images/Suhas.jpg";
import { motion } from "framer-motion";

const Container = (delay) => ({
  hidden: { x: -400, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 1, delay: delay },
  },
});

const home = () => {
  return (
    <section id="home" className="pt-24">
      <div className="flex flex-wrap mb-60 mt-16">
        <div className="w-full lg:w-1/2">
          <div className="flex h-full flex-col justify-center pl-20">
            <motion.h1
              variants={Container(0)}
              initial="hidden"
              animate="visible"
              className="pb-16 text-6xl font-thin tracking-tight lg:text-5xl"
            >
              Surya Suhas Reddy <strong>Sathi</strong>
            </motion.h1>
            <motion.span
              variants={Container(0.6)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent"
            >
              AI Engineer
            </motion.span>
            <motion.p
              variants={Container(1.2)}
              initial="hidden"
              animate="visible"
              className="my-2 max-w-xl py-6 font-light tracking-tight"
            >
              {HOME_CONTENT}
            </motion.p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <motion.img
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="size-2/3 rounded-2xl"
              src={photo}
              alt="Dp"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default home;
