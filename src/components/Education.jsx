import React from "react";
import { EDUCATION } from "../constants";
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <section id="education" className="pt-24">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="mb-20 text-center text-4xl"
      >
        Education
      </motion.h1>
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 100 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="mb-60" // Added bottom margin
      >
        {EDUCATION.map((education, index) => (
          <div
            key={index}
            className="mb-8 flex flex-col lg:flex-row lg:justify-center"
          >
            <motion.div
              whileInView={{ opacity: 1, x: 100 }}
              initial={{ opacity: 0, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="w-full lg:w-1/4"
            >
              <p className="mb-2 text-sm text-neutral-400">{education.year}</p>
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="w-full max-w-xl lg:w-3/4"
            >
              <h6 className="mb-2 font-semibold">
                {education.degree} - {education.course}
              </h6>
              <h3 className="mb-2 font-semibold">
                {education.college} - {education.place}
              </h3>
              <p className="mb-4 text-neutral-400">
                <strong>Grade:</strong> {education.grade}
              </p>
              <div className="flex flex-wrap">
                {education.courses.map((tech, index) => (
                  <span
                    key={index}
                    className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-white"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        ))}
      </motion.div>
    </section>
  );
};

export default Experience;
