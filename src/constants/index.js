import project1 from "../assets/images/projects/project-1.jpg";
import project2 from "../assets/images/projects/project-2.jpg";
import project3 from "../assets/images/projects/project-3.jpg";
import project4 from "../assets/images/projects/project-4.jpg";

export const HOME_CONTENT = `I’m a passionate AI engineer and developer with a knack for creating intelligent, impactful, and scalable solutions. I love tackling challenges, exploring new ideas, and crafting experiences that make a difference. Whether it’s building innovative systems or solving complex problems, I’m always excited to push the boundaries of what’s possible. Let’s connect and create something extraordinary together!`;

export const ABOUT_TEXT = [
  {
    p1: "Hi, I’m Surya Suhas Reddy Sathi! My passion for technology began with **IRON MAN** and **ROBOT**, inspiring me to create innovative solutions that make an impact. Over the years, I’ve honed my skills in AI, app development, and web development, embracing challenges that spark creativity and growth. I’m quick to grasp new concepts and unafraid to explore uncharted paths, always striving to innovate. Whether building machine learning models or designing apps, I bring energy and enthusiasm to every project, aiming to create something meaningful at every step.",
    p2: "Outside of work, I love enjoying life to the fullest. As a kid, I was always curious, often breaking toys to see how they worked. Now, I take pride in keeping things in top condition and love fixing broken items. With strong handyman skills in electrical work, carpentry, and repairs, I enjoy building things from scratch and fixing broken ones. I stay active with badminton, swimming, and find peace in riding motorcycles or going on solo drives. And of course, nothing beats a quiet moment with chai and Milk Bikis biscuits. My ultimate comfort. Whatever I do, I bring passion, determination, and a love for the process. That’s just me!",
  },
];

export const EXPERIENCES = [
  {
    year: "May 2024 - Sep. 2024",
    role: "AI Engineer",
    company: "Scan360 Studios",
    place: "Hyderabad, TG 🇮🇳",
    description: `Developed and optimized machine vision algorithms using Google’s MediaPipe, improving facial detection and landmark recognition. Converted facial motion data into 3D-compatible formats, reduced video processing time by 30%, and enhanced system compatibility for production-ready motion capture. Designed custom templates and stabilization tools to achieve accurate results. Collaborated with a team to streamline workflows and deliver high-quality outputs.`,
    technologies: [
      "Google MediaPipe",
      "Machine Vision",
      "Facial Detection",
      "Facial Landmark Detection",
      "Batch Processing",
      "Optimization",
      "Python",
    ],
  },
  {
    year: "Feb. 2022 - Apr. 2022",
    role: "Mobile Application Developer",
    company: "AlgoXfusion Pvt. Ltd.",
    place: "Chennai, TN 🇮🇳",
    description: `Developed a cross-platform shopping app for a supermarket chain, increasing the client base by 30%. Integrated Firebase for backend functionality, ensuring flawless operation, and deployed with Appwrite and a custom database, enhancing scalability by 25%. Designed product browsing, cart, and checkout features, improving usability and customer experience. Contributed to the app’s architecture, delivering a reliable solution for large-scale retail operations.`,
    technologies: [
      "Cross-platform App Development",
      "Database Management",
      "Flutter",
      "Dart",
      "Google Firebase",
      "appwrite",
    ],
  },
  {
    year: "Sep. 2021 - Nov. 2021",
    role: "ML Student Intern",
    company: "Cognibot",
    place: "Chennai, TN 🇮🇳",
    description: `Developed machine learning models using scikit-learn on datasets like MNIST and Iris, achieving 90%+ accuracy in disease diagnosis models. Optimized classification and regression performance through hyperparameter tuning. Conducted data preprocessing and exploratory data analysis (EDA) to enhance input quality. Evaluated models using precision, recall, and F1-score for robust validation.`,
    technologies: [
      "Python",
      "Machine Learning",
      "Data Analysis",
      "Data Visualization",
      "Model Evaluation",
      "Scikit-Learn",
      "Hyperparameter Optimization",
    ],
  },
  {
    year: "Mar. 2021 - Sep. 2021",
    role: "Software Developer",
    company: "Symphisys Software Solutions Pvt. Ltd.",
    place: "Hyderabad, TG 🇮🇳",
    description: `Enhanced front-end solutions for four eCommerce platforms as part of a 5-member team, improving UI/UX and boosting user engagement by 15%. Optimized key functionalities like search, cart, and checkout, increasing platform efficiency by 20%. Accelerated feature deployment timelines by 25%, enhancing project delivery. Developed scalable solutions ensuring seamless integration across platforms.`,
    technologies: [
      "Front-End Development",
      "HTML",
      "CSS",
      "JavaScript",
      "Git",
      "Figma",
      "UI/UX",
      "Optimization",
      "Data Driven Insights",
    ],
  },
];

export const EDUCATION = [
  {
    year: " Aug. 2023 - Jan. 2025",
    degree: "Master of Science",
    course: "Engineering Science ( Artificial Intelligence )",
    college: "University at Buffalo",
    place: "Buffalo, NY 🇺🇸",
    grade: "3.43",
    courses: [
      "Fundamentals of AI",
      "Numerical Math for Engineering and Data Science",
      "Machine Leaning",
      "Algorithms Analysis and Design",
      "Reinforcement Learning",
      "Pattern Recognition",
      "Computer Vision and Image Processing",
      "Data Intensive Computing",
      "Deep Learning",
      "Information Retrieval",
    ],
  },
  {
    year: " May 2019 - May 2023",
    degree: "Bachelor of Engineering",
    course: "Computer Science and Engineering",
    college: "Sathyabama Institute of Science and Technology",
    place: "Chennai, TN 🇮🇳",
    grade: "9.39",
    courses: [
      "Machine Learning",
      "Artificial Intelligence",
      "Deep Learning",
      "Data Science",
      "Big Data Analytics",
      "Fog and Cloud Computing",
      "Network Security",
      "Database Management Systems",
      "Design and Analysis of Algorithms",
      "Operating Systems",
      "Computer Networks and Design",
      "Business Analytics",
      "Compiler Design",
      "Distributed Database and Information Systems",
      "Object Oriented Analysis and System Engineering",
    ],
  },
];

export const PROJECTS = [
  {
    title: "Wikipedia ChatBot",
    image: project1,
    description:
      "An advanced Information Retrieval (IR) chatbot system designed to answer questions and engage in chit-chat by leveraging Wikipedia data. It integrates web scraping, topic classification, document retrieval, and summarization with conversational AI in an interactive Streamlit interface.",
    technologies: [
      "Information Retrieval",
      "ChatGPT API",
      "Streamlit",
      "Python",
      "SQL-lite",
    ],
  },
  {
    title: "Research Paper Question Answering Bot",
    image: project2,
    description:
      "An intelligent system for parsing research papers, including EOC parsing and dataset preparation, reducing manual extraction time by 50%. Integrated a fine-tuned RAG model and a Streamlit-based interface for accurate real-time querying and seamless document integration.",
    technologies: ["RAG", "Streamlit", "ChromaDB", "Python", "Deepseek"],
  },
  {
    title: "City Guard AI",
    image: project3,
    description:
      "A competitive 2D world simulation featuring multi-agent reinforcement learning, where two RL agents and a human-controlled player compete to eliminate the most enemies in a city environment, showcasing strategic decision-making and dynamic gameplay.",
    technologies: [
      "Reinforcement Learning",
      "Python",
      "PyGame",
      "Multi Agent RL",
    ],
  },
  {
    title: "AI Powered Quiz Generator",
    image: project4,
    description:
      "An AI-powered quiz generation platform leveraging OpenAI API to design and deliver customized quizzes across diverse domains, ensuring efficiency, scalability, and enhanced content accuracy.",
    technologies: ["Streamlit", "Open AI API", "RAG", "Python", "ChromaDB"],
  },
];
