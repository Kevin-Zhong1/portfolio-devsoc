import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

import singaporeBg from "../assets/singapore_bg.jpg";
import taiwanBg from "../assets/taiwan_bg.jpg";
import vietnamBg from "../assets/vietnam_bg.jpg";

const countries = ["Singapore", "Taiwan", "Vietnam"];
const backgroundImages = {
  Singapore: singaporeBg,
  Taiwan: taiwanBg,
  Vietnam: vietnamBg,
};

export default function Portfolio() {
  const [index, setIndex] = useState(0);
  const [country, setCountry] = useState("Singapore");

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % countries.length);
    }, 3000); //  <----- change the transition here
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {/* Navbar */}
      <nav className="flex justify-between items-center p-6 bg-white bg-opacity-80 border-b border-gray-300">
        <div className="text-xl font-semibold">Kevin Zhong</div>
        <div className="flex space-x-6">
          <Link to="about" smooth={true} className="cursor-pointer">
            About
          </Link>
          <a href="#contact" className="cursor-pointer">
            Contact
          </a>
          <a href="https://www.linkedin.com/in/kevin-zhong-unsw" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href="https://github.com/Kevin-Zhong1" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </div>
      </nav>

      <section
        id="landing"
        className="flex flex-col items-center justify-center h-screen text-center"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center px-8 gap-12">
          {/* Left: Text */}
          <div className="text-left">
            <h1 className="text-5xl font-bold">Meet me in...</h1>
            <motion.div
              key={countries[index]}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="text-4xl font-semibold mt-4 cursor-pointer text-blue-700"
              onClick={() => {
                setCountry(countries[index]);
                window.scrollTo({
                  top: document.getElementById("about").offsetTop,
                  behavior: "smooth",
                });
              }}
            >
              {countries[index]}
            </motion.div>
          </div>

          {/* Right: Phone Frame */}
          <div className="flex justify-center">
            <div className="relative w-60 h-120 rounded-3xl shadow-lg border-2 border-gray-300 overflow-hidden">
              <motion.img
                key={countries[index]}
                src={backgroundImages[countries[index]]}
                alt={`${countries[index]} travel`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About section */}
      <section id="about" className="min-h-screen p-16 bg-gray-100">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {/* Bio */}
          <div className="space-y-6">
            <h1 className="text-5xl font-normal">Hey, I&apos;m Kevin!</h1>
            <p className="text-gray-700 leading-relaxed">
              I&apos;m a computer science x finance student at UNSW and a software engineer at{" "}
              <a href="https://www.joinroster.co" className="text-blue-700">
                Roster
              </a>
              . I&apos;m always exploring new tech, cozy cafes, and startup ideas. I also love
              traveling and exploring the world!
            </p>
            <p className="text-gray-700 leading-relaxed">
              When I&apos;m not working, you can find me
              <ul className="list-disc ml-9">
                <li>receiving attacks in volleyball 🏐</li>
                <li>bluffing away in poker 🤑</li>
                <li>coding fun personal projects 👨‍💻</li>
              </ul>
            </p>
            <div className="flex space-x-4">
              <a
                href="mailto:kevin.zhong16+spam@gmail.com"
                className="px-6 py-3 bg-gray-800 text-white rounded-md hover:bg-gray-700 transition-colors"
              >
                Contact me
              </a>
              <Link
                to="landing"
                smooth={true}
                className="px-6 py-3 bg-gray-600 text-white rounded-md hover:bg-gray-500 transition-colors cursor-pointer"
              >
                Travel more
              </Link>
            </div>
          </div>

          {/* Images grid */}
          <div className="grid grid-cols-2 gap-4">
            {[...Array(4)].map((_, idx) => (
              <img
                key={idx}
                src={`./assets/${country.toLowerCase()}_${idx + 1}.jpg`}
                alt={`${country} travel image`}
                className="w-full aspect-[4/3] object-cover rounded-lg shadow-sm"
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
