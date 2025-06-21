import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Brain,
  Sparkles,
  Rocket,
  Wrench,
  BarChart,
  Handshake,
  Activity,
  Footprints,
  Radar,
  GraduationCap,
  FileText,
  Mic,
  ChevronLeft,
  ChevronRight,
  Code2
} from "lucide-react";

export default function LandingPage() {
  const scrollRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollRef.current) {
        scrollRef.current.scrollBy({ left: 220, behavior: "smooth" });
      }
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const scrollLeft = () => scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
  const scrollRight = () => scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });

  return (
    <div className="bg-black text-white min-h-screen font-sans relative overflow-hidden">
      {/* Background Glow Blob */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.2, scale: 1 }}
        transition={{ duration: 2, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" }}
        className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-purple-700 blur-3xl rounded-full z-0"
      />

      {/* NAVBAR */}
      <nav className="w-full fixed top-0 left-0 z-50 bg-black/80 backdrop-blur border-b border-gray-800 shadow-md overflow-visible">
        <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center text-white relative overflow-visible">
          <div className="relative flex items-center group z-50">
          <img src={`${process.env.PUBLIC_URL}/icon.svg`} alt="Logo" className="h-20 w-20" />
            <div className="ml-3 opacity-0 group-hover:opacity-100 translate-x-0 group-hover:translate-x-1 transition-all duration-300 bg-white text-black font-medium px-4 py-2 rounded-lg border border-purple-400 shadow-xl z-50 whitespace-nowrap">
              Dante Trabassi · AI for Neurorehab
            </div>
          </div>

          <div className="space-x-4 text-sm">
            <a href="#what" className="hover:text-blue-400 transition">What I Do</a>
            <a href="#projects" className="hover:text-blue-400 transition">Projects</a>
            <a href="#contact" className="hover:text-blue-400 transition">Contact</a>
            <a href="/CV_DT.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition" title="Download CV">CV</a>
            <a href="#contact" className="inline-block px-3 py-1 bg-gradient-to-r from-purple-600 to-blue-500 text-white rounded-md shadow hover:scale-105 transition-transform text-xs font-medium">Work with me</a>
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="h-screen relative flex flex-col justify-center items-center text-center px-4 overflow-hidden">
        <motion.div
          initial={{ scale: 0.9, opacity: 0.5 }}
          animate={{ scale: 1.05, opacity: 0.7 }}
          transition={{ duration: 6, repeat: Infinity, repeatType: "reverse" }}
          className="absolute w-[600px] h-[600px] bg-gradient-to-br from-purple-500 via-pink-500 to-blue-500 rounded-full blur-[120px] opacity-60 z-0 top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        />

        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent mb-6 drop-shadow-[0_0_12px_rgba(164,89,255,0.4)] z-10"
        >
          AI for Healthcare that Makes Sense
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-xl md:text-2xl text-gray-300 italic max-w-3xl z-10"
        >
          I help clinical teams and healthtech startups turn real-world data into explainable AI solutions.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="text-sm text-gray-500 mt-16 animate-bounce z-10"
        >
          ↓ Scroll to explore
        </motion.div>
      </section>

      {/* WHAT I CAN HELP YOU WITH */}
      <section id="what" className="max-w-6xl mx-auto text-center py-24 px-4">
        <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500 mb-16">
          WHAT I CAN HELP YOU WITH
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
          {[{
            icon: <Brain className="w-6 h-6 text-purple-400 group-hover:scale-110 transition-transform duration-300" />, title: "AI from Wearables & Clinical Data", desc: "Build predictive models from IMU, EMG, and electronic health records." },
            { icon: <Sparkles className="w-6 h-6 text-purple-400 group-hover:rotate-12 transition-transform duration-300" />, title: "Explainable AI", desc: "Deliver insights with SHAP, SHAPSet plot, and Grad-CAM visualizations." },
            { icon: <Rocket className="w-6 h-6 text-purple-400 group-hover:-translate-y-1 transition-transform duration-300" />, title: "Deployable Webapps", desc: "End-to-end Streamlit or dashboard solutions for clinical teams." },
            { icon: <Wrench className="w-6 h-6 text-purple-400 group-hover:rotate-6 transition-transform duration-300" />, title: "Full Pipeline Ownership", desc: "From raw data to MVP, including preprocessing and ML modeling." },
            { icon: <BarChart className="w-6 h-6 text-purple-400 group-hover:scale-110 transition-transform duration-300" />, title: "Data Storytelling", desc: "Transform results into presentations, papers, or grant-winning narratives." },
            { icon: <Handshake className="w-6 h-6 text-purple-400 group-hover:scale-110 transition-transform duration-300" />, title: "Tech Advisory", desc: "Weekly support to research teams or AI strategy for clinical trials." },
          ].map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="group bg-zinc-900 border border-zinc-700 p-6 rounded-xl shadow hover:shadow-purple-500/30 transition duration-300"
            >
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-lg font-bold mb-2">{item.title}</h3>
              <p className="text-sm text-gray-300">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* SELECTED PROJECTS */}
<section id="projects" className="max-w-6xl mx-auto py-24 px-4">
  <h2 className="text-3xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500 text-center mb-2">
    SELECTED PROJECTS
  </h2>
  <p className="text-center text-gray-400 mb-10 italic text-sm md:text-base">
    From gait data to explainability: some recent tools I’ve built.
  </p>

  <div className="grid md:grid-cols-2 gap-6">
    {[
      {
        icon: <Brain className="w-6 h-6 text-purple-400" />,
        title: "ParkinsonProdrome-XAI",
        desc: "Risk classification in Parkinson’s prodromes using IMU data and SHAP. Deployed Streamlit app with clinical filtering.",
        link: "https://github.com/DanteTrb/Prodromal_Parkinson"
      },
      {
        icon: <Activity className="w-6 h-6 text-purple-400" />,
        title: "MuscleDeterminants-HSP",
        desc: "BiLSTM+CNN on EMG data for rare disease gait profiling. SHAP-based interpretation used in therapy planning.",
        link: "https://github.com/DanteTrb/EMG_HSP_analysis"
      },
      {
        icon: <Footprints className="w-6 h-6 text-purple-400" />,
        title: "FallRiskPredictor",
        desc: "Fall risk assessment in PD patients. Webapp interface with SHAP explainability.",
        link: "https://github.com/DanteTrb/fall-risk-predictor"
      },
      {
        icon: <Radar className="w-6 h-6 text-purple-400" />,
        title: "NeuroCompare-XAI",
        desc: "Clustering-based agent to compare neurological patients with radar plots and narrative profiling (launching 2025).",
        link: "https://github.com/DanteTrb/NeuroCompare-XAI"
      }
    ].map((project, index) => (
      <motion.a
        key={index}
        whileHover={{ scale: 1.03 }}
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="relative bg-black/60 border border-zinc-700 backdrop-blur-md p-6 rounded-2xl shadow-md hover:shadow-purple-500/30 transition-all group overflow-hidden"
      >
        {/* Side glow effect */}
        <div className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-purple-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>

        {/* Icon + Title */}
        <div className="flex items-center gap-3 mb-2">
          {project.icon}
          <h3 className="text-lg font-semibold">{project.title}</h3>
        </div>

        {/* Description */}
        <p className="text-sm text-gray-300 mb-2">{project.desc}</p>

        {/* CTA on hover */}
        <span className="absolute bottom-4 right-4 text-xs text-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          → View Repo
        </span>
      </motion.a>
    ))}
  </div>
</section>

      {/* CREDENTIALS */}
<section className="max-w-6xl mx-auto text-center py-24 px-4 z-10">
  <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500 mb-16">
    CREDENTIALS
  </h2>

  <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 text-center">
    {[
      {
        icon: <GraduationCap className="w-7 h-7 text-purple-400 group-hover:scale-110 transition-transform duration-300" />,
        title: "PhD Candidate",
        desc: "Neuroscience @ Sapienza University of Rome"
      },
      {
        icon: <FileText className="w-7 h-7 text-purple-400 group-hover:rotate-6 transition-transform duration-300" />,
        title: "20+ Publications",
        desc: "Peer-reviewed papers in Q1 scientific journals"
      },
      {
        icon: <Mic className="w-7 h-7 text-purple-400 group-hover:scale-105 transition-transform duration-300" />,
        title: "10+ Talks",
        desc: "Invited speaker in international conferences & workshops"
      },
      {
        icon: <Code2 className="w-7 h-7 text-purple-400 group-hover:-rotate-3 transition-transform duration-300" />,
        title: "Open-Source Projects",
        desc: "10+ AI repos and clinical webapps shared on GitHub"
      }
    ].map((item, index) => (
      <motion.div
        key={index}
        whileHover={{ scale: 1.05 }}
        className="group bg-zinc-900 border border-zinc-700 p-6 rounded-xl shadow hover:shadow-purple-500/30 transition duration-300"
      >
        <div className="mb-4 flex justify-center">
          {item.icon}
        </div>
        <h3 className="text-md font-bold mb-1">{item.title}</h3>
        <p className="text-sm text-gray-300">{item.desc}</p>
      </motion.div>
    ))}
  </div>
</section>

      {/* CONTACT */}
      <section id="contact" className="text-center py-20 px-4">
        <h2 className="text-xl font-bold mb-2">🚀 Ready to Collaborate?</h2>
        <p className="mb-4">Let's turn your data into insights. Schedule a free discovery call or drop a message now.</p>
        <a href="mailto:dantetrb@gmail.com" className="inline-block px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-500 text-white rounded-xl shadow hover:bg-purple-700 transition">
          Work with me
        </a>
      </section>

{/* Collaborations & Clients */}
<section className="bg-black py-20 px-4 relative">
  <h2 className="text-center text-3xl md:text-4xl font-bold text-white mb-10">
    Collaborations & Clients
  </h2>

  {/* Frecce */}
  <button
    onClick={scrollLeft}
    className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/60 p-2 rounded-full z-10 hover:bg-purple-600 transition"
  >
    <ChevronLeft className="text-white w-6 h-6" />
  </button>
  <button
    onClick={scrollRight}
    className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/60 p-2 rounded-full z-10 hover:bg-purple-600 transition"
  >
    <ChevronRight className="text-white w-6 h-6" />
  </button>

 {/* Loghi animati wow */}
<div
  ref={scrollRef}
  className="flex gap-8 overflow-x-auto scrollbar-hide scroll-smooth px-4 pb-2"
>
{[
  "inail-logo.png",
  "fondazione-mondino-fb-1216891682.jpg",
  "th-4113605420.jpg",
  "th-2464091876.jpg",
  "logo-sapienza.png",
  "logo-200.png",
  "logo-policlinico-italia.png"
].map((filename, i) => (
  <img
    key={i}
    src={`${process.env.PUBLIC_URL}/logos/${filename}`}
    alt={`Logo ${i}`}
    className="h-20 w-auto object-contain grayscale hover:grayscale-0 transition duration-300"
  />
))}
</div>
</section>

{/* FINAL CALL-TO-ACTION */}
<section className="relative h-[400px] bg-black overflow-hidden flex items-center justify-center">
  {/* Figura T-pose animata */}
  <motion.img
  src={`${process.env.PUBLIC_URL}/tpose.png`}
  alt="T-pose figure"
  animate={{
    x: [0, 100, 0],
    opacity: [1, 1, 1]
  }}
  transition={{
    duration: 6,
    ease: "easeInOut",
    repeat: Infinity
  }}
  className="absolute left-0 bottom-0 h-40 md:h-60"
/>
  {/* CTA testuale */}
  <div className="z-10 text-center">
    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
      Let’s build something impactful together.
    </h2>
    <a
      href="mailto:dantetrb@gmail.com"
      className="inline-block px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-500 text-white rounded-xl shadow hover:scale-105 transition-transform"
    >
      Let’s Build Together
    </a>
  </div>
</section>

      {/* FOOTER */}
      <footer className="text-center border-t pt-6 text-sm text-gray-600 pb-10">
        <p>Email: <a href="mailto:dantetrb@gmail.com" className="text-blue-400">dantetrb@gmail.com</a></p>
        <p>GitHub: <a href="https://github.com/DanteTrb" className="text-blue-400">DanteTrb</a></p>
        <p>Book a call: <a href="https://calendly.com/dantetrb" className="text-blue-400">Calendly link</a></p>
      </footer>
    </div>
  );
}