import { motion } from "framer-motion";
import { FaPython, FaHtml5, FaCss3Alt, FaJs, FaReact, FaDatabase } from "react-icons/fa";
import { SiMysql, SiPandas, SiNumpy, SiBootstrap } from "react-icons/si";

const skills = [
  { name: "Python", icon: <FaPython color="#3776AB" /> },
  { name: "HTML", icon: <FaHtml5 color="#E34F26" /> },
  { name: "CSS", icon: <FaCss3Alt color="#1572B6" /> },
  { name: "JavaScript", icon: <FaJs color="#F7DF1E" /> },
  { name: "ReactJS", icon: <FaReact color="#61DBFB" /> },
  { name: "Bootstrap", icon: <SiBootstrap color="#7952B3" /> },
  { name: "MySQL", icon: <SiMysql color="#00758F" /> },
  { name: "Pandas", icon: <SiPandas color="#150458" /> },
  { name: "NumPy", icon: <SiNumpy color="#013243" /> },
  { name: "Database", icon: <FaDatabase color="#F29111" /> }
];

function Skills() {
  return (
    <section id="skills" className="py-32">

      <div className="max-w-6xl mx-auto">

        <h2 className="text-3xl font-bold mb-10">
          Skills
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

          {skills.map((skill) => (
            <motion.div
              key={skill.name}
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="flex items-center gap-3 p-6 bg-white/5 border border-white/10 rounded-xl 
              hover:shadow-blue-500/40 hover:shadow-lg transition"
            >

              <span className="text-3xl">
                {skill.icon}
              </span>

              <span className="text-gray-200 font-medium">
                {skill.name}
              </span>

            </motion.div>
          ))}

        </div>

      </div>

    </section>
  );
}
export default Skills;