function Education() {
  const education = [
    {
      title: "B.E. Computer Science and Engineering",
      institute: "Sathyabama Institute of Science and Technology, Chennai",
      grade: "CGPA: 7.94",
      year: "Oct 2021 – May 2025",
      description:
        "Currently pursuing Bachelor's degree in Computer Science and Engineering with focus on Data Structures, Algorithms, Database Management Systems and Web Development.",
      logo: "/assets/education/sathyabama.png",
    },
    {
      title: "Class XII (Intermediate)",
      institute: "Sri Chaitanya Educational Institutions, Guntur",
      grade: "Percentage: 71.8%",
      year: "2019 – 2021",
      description:
        "Completed higher secondary education with specialization in Mathematics, Physics and Chemistry (MPC).",
      logo: "/assets/education/srichaitanya.png",
    },
    {
      title: "Class X (SSC)",
      institute: "Sri Gayathri E.M School, Vinukonda",
      grade: "Percentage: 88%",
      year: "2019",
      description:
        "Completed secondary education with strong academic performance and interest in science and mathematics.",
      logo: "/assets/education/gayathri.png",
    },
  ];

  return (
    <section id="education" className="py-24">

      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-3xl font-bold text-center mb-20">
          Education
        </h2>

        <div className="relative">

          {/* Timeline Line */}
          <div className="absolute left-6 top-0 bottom-0 w-[3px] bg-gradient-to-b from-purple-500 to-purple-700"></div>

          <div className="space-y-16">

            {education.map((edu, index) => (
              <div
                key={index}
                className="relative flex items-start gap-6"
              >

                {/* Timeline Dot */}
                <div className="w-5 h-5 bg-purple-500 rounded-full mt-4 shadow-[0_0_15px_rgba(168,85,247,0.9)] z-10"></div>

                {/* Education Card */}
                <div className="flex gap-6 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 w-full transition duration-300 hover:border-purple-500 hover:shadow-[0_0_25px_rgba(168,85,247,0.7)]">

                  {/* Logo */}
                  <img
                    src={edu.logo}
                    alt="institute logo"
                    className="w-16 h-16 rounded-lg object-contain bg-white p-2"
                  />

                  {/* Content */}
                  <div>

                    <h3 className="text-xl font-semibold">
                      {edu.title}
                    </h3>

                    <p className="text-purple-400">
                      {edu.institute}
                    </p>

                    <p className="text-gray-400 text-sm mt-1">
                      {edu.year}
                    </p>

                    <p className="text-gray-300 mt-2">
                      {edu.grade}
                    </p>

                    <p className="text-gray-400 text-sm mt-2 leading-relaxed">
                      {edu.description}
                    </p>

                  </div>

                </div>

              </div>
            ))}

          </div>

        </div>

      </div>

    </section>
  );
}

export default Education;