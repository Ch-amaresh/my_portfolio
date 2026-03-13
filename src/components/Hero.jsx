import TechSphere from "./TechSphere";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";

function Hero() {
  return (
    <section id="about" className="pt-28 pb-10">

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">

        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >

          <h1 className="text-5xl font-bold mb-4 leading-tight">
            Hi, I am <br />
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              NAGA AMARESH
            </span>
          </h1>

          {/* Typing Animation */}
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 flex items-center gap-2">

            <span className="text-gray-300">I am a</span>

            <Typewriter
              options={{
                strings: [
                  "Python Developer",
                  "Frontend Developer",
                  "Web Developer",
                  "Machine Learning Enthusiast"
                ],
                autoStart: true,
                loop: true,
                wrapperClassName:
                  "text-purple-500 ",
                cursorClassName: "text-purple-500",
              }}
            />

          </h2>

          <p className="text-gray-400 mb-6 max-w-lg">
            Computer Science graduate passionate about Python,
            Machine Learning and Web Development.
          </p>

          <a
            href="/assets/Amaresh_python_resume.pdf"
            download
            className="px-6 py-3 bg-blue-500 rounded-lg hover:bg-blue-600 transition"
          >
            Download Resume
          </a>

        </motion.div>

        {/* Right Side */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex justify-center items-center"
        >

          <div className="w-[280px] md:w-[400px]">
            <TechSphere />
          </div>

        </motion.div>

      </div>

    </section>
  );
}

export default Hero;