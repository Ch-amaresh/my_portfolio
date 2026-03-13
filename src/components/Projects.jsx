import { FaPython, FaHtml5, FaCss3Alt, FaJs, FaDatabase } from "react-icons/fa";
import { SiDjango, SiStreamlit, SiNumpy, SiPandas } from "react-icons/si";

const projects = [
  {
    title: "Online Payment Fraud Detection",
    description:
      "Machine learning system that detects fraudulent transactions using NLP and transformer models.",
    github: "https://github.com/Ch-amaresh/online-payment-fraud-detection",
    skills: [
      <FaPython color="#3776AB" />,
      <SiPandas color="#150458" />,
      <SiNumpy color="#013243" />,
      <SiStreamlit color="#FF4B4B" />,
    ],
  },
  {
    title: "Personal Blog Site",
    description:
      "Blog platform where users can create, read, update and delete blog posts.",
    github: "https://github.com/Ch-amaresh/blog_website",
    skills: [
      <FaHtml5 color="#E34F26" />,
      <FaCss3Alt color="#1572B6" />,
      <FaDatabase color="#F29111" />,
    ],
  },
  {
    title: "Online Grocery Website",
    description:
      "E-commerce grocery website with cart functionality built using Django.",
    github: "https://github.com/Ch-amaresh/Online_Shopping_Project_Django",
    skills: [
      <FaHtml5 color="#E34F26" />,
      <FaCss3Alt color="#1572B6" />,
      <FaJs color="#F7DF1E" />,
      <SiDjango color="#092E20" />,
    ],
  },
];

function Projects() {
  return (
    <section id="projects" className="py-32">
      <div className="max-w-6xl mx-auto">

        <h2 className="text-3xl font-bold mb-10">
          Projects
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {projects.map((project) => (
            <div
              key={project.title}
              className="p-8 bg-white/5 border border-white/10 rounded-xl hover:shadow-blue-500/40 hover:shadow-lg transition"
            >

              <h3 className="text-xl font-semibold mb-4">
                {project.title}
              </h3>

              <p className="text-gray-400 mb-6">
                {project.description}
              </p>

              {/* Colorful Icons */}
              <div className="flex gap-4 text-3xl mb-6">
                {project.skills.map((icon, index) => (
                  <span key={index}>{icon}</span>
                ))}
              </div>

              <a
                href={project.github}
                target="_blank"
                className="px-4 py-2 bg-gray-800 rounded hover:bg-gray-700"
              >
                View Code
              </a>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
export default Projects;