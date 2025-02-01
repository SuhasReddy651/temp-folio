import React from "react";
import { motion } from "framer-motion";
import {
  FaPython,
  FaJava,
  FaCopyright,
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaLinux,
  FaWindows,
  FaAws,
  FaDocker,
  FaGit,
  FaGithub,
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import {
  SiCplusplus,
  SiDart,
  SiTensorflow,
  SiPytorch,
  SiKeras,
  SiNumpy,
  SiPandas,
  SiScikitlearn,
  SiOpencv,
  SiPlotly,
  SiTableau,
  SiFastapi,
  SiMongodb,
  SiFlask,
  SiStreamlit,
  SiApple,
  SiAndroid,
  SiIos,
  SiGooglecloud,
  SiKubernetes,
} from "react-icons/si";
import { DiSqllite } from "react-icons/di";
import { BiLogoPostgresql } from "react-icons/bi";
import Matplotlib from "../assets/images/icons/matplotlib.svg";
import Seaborn from "../assets/images/icons/seaborn.svg";
import PowerBI from "../assets/images/icons/powerbi.svg";
import PySpark from "../assets/images/icons/pyspark.svg";
import Azure from "../assets/images/icons/azure.svg";
import { GrMysql } from "react-icons/gr";

const IconVariant = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const categories = [
  {
    title: "Programming Languages",
    skills: [
      {
        name: "Python",
        icon: <FaPython className="text-7xl text-blue-500" />,
        duration: 2,
      },
      {
        name: "Java",
        icon: <FaJava className="text-7xl text-red-500" />,
        duration: 2.2,
      },
      {
        name: "JavaScript",
        icon: <IoLogoJavascript className="text-7xl text-yellow-400" />,
        duration: 2.4,
      },
      {
        name: "C++",
        icon: <SiCplusplus className="text-7xl text-blue-500" />,
        duration: 2.8,
      },
      {
        name: "C",
        icon: <FaCopyright className="text-7xl text-blue-400" />,
        duration: 3,
      },
      {
        name: "Dart",
        icon: <SiDart className="text-7xl text-blue-400" />,
        duration: 3.4,
      },
    ],
  },
  {
    title: "Machine Learning & AI",
    skills: [
      {
        name: "TensorFlow",
        icon: <SiTensorflow className="text-7xl text-orange-500" />,
        duration: 2,
      },
      {
        name: "PyTorch",
        icon: <SiPytorch className="text-7xl text-red-500" />,
        duration: 2.2,
      },
      {
        name: "Keras",
        icon: <SiKeras className="text-7xl text-red-600" />,
        duration: 2.4,
      },
      {
        name: "NumPy",
        icon: <SiNumpy className="text-7xl text-blue-400" />,
        duration: 2.6,
      },
      {
        name: "Pandas",
        icon: <SiPandas className="text-7xl text-blue-600" />,
        duration: 2.8,
      },
      {
        name: "Scikit-Learn",
        icon: <SiScikitlearn className="text-7xl text-orange-500" />,
        duration: 3.0,
      },
      {
        name: "OpenCV",
        icon: <SiOpencv className="text-7xl text-green-500" />,
        duration: 3.2,
      },
    ],
  },
  {
    title: "Data Science & Analytics",
    skills: [
      {
        name: "Matplotlib",
        icon: (
          <img src={Matplotlib} alt="Matplotlib Logo" className="w-16 h-16" />
        ),
        duration: 2,
      },
      {
        name: "Seaborn",
        icon: <img src={Seaborn} alt="Seaborn Logo" className="w-16 h-16" />,
        duration: 2.2,
      },
      {
        name: "Plotly",
        icon: <SiPlotly className="text-7xl text-blue-500" />,
        duration: 2.4,
      },
      {
        name: "PowerBI",
        icon: <img src={PowerBI} alt="Power BI Logo" className="w-16 h-16" />,
        duration: 2.6,
      },
      {
        name: "Tableau",
        icon: <SiTableau className="text-7xl text-blue-600" />,
        duration: 2.8,
      },
      {
        name: "PySpark",
        icon: <img src={PySpark} alt="Spark Logo" className="w-16 h-16" />,
        duration: 3.0,
      },
    ],
  },
  {
    title: "Web Development",
    skills: [
      {
        name: "React",
        icon: <FaReact className="text-7xl text-blue-400" />,
        duration: 2,
      },
      {
        name: "Node.js",
        icon: <FaNodeJs className="text-7xl text-green-500" />,
        duration: 2.2,
      },
      {
        name: "FastAPI",
        icon: <SiFastapi className="text-7xl text-teal-500" />,
        duration: 2.4,
      },
      {
        name: "Flask",
        icon: <SiFlask className="text-7xl text-gray-400" />,
        duration: 2.6,
      },
      {
        name: "Streamlit",
        icon: <SiStreamlit className="text-7xl text-red-500" />,
        duration: 2.8,
      },
      {
        name: "HTML5",
        icon: <FaHtml5 className="text-7xl text-orange-500" />,
        duration: 3.0,
      },
      {
        name: "CSS3",
        icon: <FaCss3Alt className="text-7xl text-blue-500" />,
        duration: 3.2,
      },
    ],
  },
  {
    title: "Cloud & DevOps",
    skills: [
      {
        name: "AWS",
        icon: <FaAws className="text-7xl text-orange-400" />,
        duration: 2,
      },
      {
        name: "Azure",
        icon: <img src={Azure} alt="Azure Logo" className="w-16 h-16" />,
        duration: 2.2,
      },
      {
        name: "GCP",
        icon: <SiGooglecloud className="text-7xl text-blue-400" />,
        duration: 2.4,
      },
      {
        name: "Docker",
        icon: <FaDocker className="text-7xl text-blue-400" />,
        duration: 2.6,
      },
      {
        name: "Kubernetes",
        icon: <SiKubernetes className="text-7xl text-blue-500" />,
        duration: 2.8,
      },
      {
        name: "Git",
        icon: <FaGit className="text-7xl text-orange-500" />,
        duration: 3.0,
      },
      {
        name: "GitHub",
        icon: <FaGithub className="text-7xl text-black-500" />,
        duration: 3.0,
      },
    ],
  },
  {
    title: "Databases",
    skills: [
      {
        name: "MongoDB",
        icon: <SiMongodb className="text-7xl text-green-500" />,
        duration: 2,
      },
      {
        name: "MySQL",
        icon: <GrMysql className="text-7xl text-sky-700" />,
        duration: 2.4,
      },
      {
        name: "SQLlite",
        icon: <DiSqllite className="text-7xl text-sky-800" />,
        duration: 2.4,
      },
      {
        name: "PostgreSQL",
        icon: <BiLogoPostgresql className="text-7xl text-sky-700" />,
        duration: 2.8,
      },
    ],
  },
  {
    title: "Operating Systems",
    skills: [
      {
        name: "Linux",
        icon: <FaLinux className="text-7xl text-yellow-600" />,
        duration: 2,
      },
      {
        name: "Windows",
        icon: <FaWindows className="text-7xl text-blue-500" />,
        duration: 2.4,
      },
      {
        name: "macOS",
        icon: <SiApple className="text-7xl text-white-500" />,
        duration: 2.8,
      },
      {
        name: "Android",
        icon: <SiAndroid className="text-7xl text-green-500" />,
        duration: 3.2,
      },
      {
        name: "iOS",
        icon: <SiIos className="text-7xl text-white" />,
        duration: 3.6,
      },
    ],
  },
];

const Tech = () => {
  return (
    <section id="tech" className="pt-24">
      {" "}
      {/* Added pt-24 for top spacing */}
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.4, delay: 0.5 }}
        className="mb-20 text-center text-4xl" // Changed my-20 to mb-20
      >
        Technologies & Skills
      </motion.h1>
      <div className="mb-60">
        {" "}
        {/* Added container with bottom margin */}
        {categories.map((category, index) => (
          <div key={index} className="my-10">
            <h2 className="text-2xl mb-6 text-center">{category.title}</h2>
            <div className="flex flex-wrap items-center justify-center gap-4">
              {category.skills.map((skill, skillIndex) => (
                <motion.div
                  key={skillIndex}
                  variants={IconVariant(skill.duration)}
                  initial="initial"
                  animate="animate"
                  className="rounded-2xl border-4 border-neutral-800 p-4"
                >
                  {skill.icon}
                  <p className="mt-2 text-center text-lg">{skill.name}</p>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Tech;
