import { useState, useEffect } from "react";
import { FaEye, FaDownload, FaTimes } from "react-icons/fa";

function Certifications() {
  const [selectedCert, setSelectedCert] = useState(null);

  // Close modal using ESC key
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === "Escape") {
        setSelectedCert(null);
      }
    };

    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  const certificates = [
    {
      title: "SQL & Python Bootcamp",
      issuer: "Imarticus Learning",
      description:
        "Completed bootcamp training on SQL and Python including database queries, data analysis and a mini project on credit card fraud detection.",
      image: "/assets/certificates/python_certificate.png",
      pdf: "/assets/certificates/python_certificate.pdf",
    },
    {
      title: "Full Stack Web Development Internship",
      issuer: "Bharat Intern",
      description:
        "Completed virtual internship focused on full stack web development including HTML, CSS, JavaScript and project implementation.",
      image: "/assets/certificates/webdev_certificate.png",
      pdf: "/assets/certificates/webdev_certificate.pdf",
    },
    {
      title: "Cloud Infrastructure",
      issuer: "Oracle University",
      description:
        "Certification covering cloud computing fundamentals including infrastructure, deployment models and cloud services.",
      image: "/assets/certificates/Cloud_Infrastructure.png",
      pdf: "/assets/certificates/Cloud_Infrastructure.pdf",
    },
  ];

  return (
    <section id="certifications" className="py-20">

      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-3xl font-bold text-center mb-12">
          Certifications
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {certificates.map((cert, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-md rounded-xl border border-white/10 overflow-hidden hover:scale-105 hover:shadow-[0_0_20px_rgba(168,85,247,0.5)] transition"
            >
              
              {/* Certificate Image */}
              <img
                src={cert.image}
                alt={cert.title}
                className="w-full h-48 object-cover"
              />

              <div className="p-6 text-center">

                <h3 className="text-xl font-semibold">
                  {cert.title}
                </h3>

                <p className="text-purple-400 text-sm mb-3">
                  Issued by: {cert.issuer}
                </p>

                <p className="text-gray-400 text-sm mb-6">
                  {cert.description}
                </p>

                <div className="flex justify-center gap-4">

                  {/* View Button */}
                  <button
                    onClick={() => setSelectedCert(cert)}
                    className="flex items-center gap-2 px-4 py-2 bg-purple-500 rounded-lg hover:bg-purple-600 transition"
                  >
                    <FaEye />
                    View
                  </button>

                  {/* Download Button */}
                  <a
                    href={cert.pdf}
                    download
                    className="flex items-center gap-2 px-4 py-2 border border-purple-500 text-purple-400 rounded-lg hover:bg-purple-500 hover:text-white transition"
                  >
                    <FaDownload />
                    Download
                  </a>

                </div>

              </div>

            </div>
          ))}

        </div>

      </div>


      {/* Modal */}
      {selectedCert && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
          onClick={() => setSelectedCert(null)}
        >

          <div
            className="relative max-w-4xl w-full p-4"
            onClick={(e) => e.stopPropagation()}
          >

            {/* Close Button */}
            <button
              onClick={() => setSelectedCert(null)}
              className="absolute top-4 right-4 bg-purple-500 text-white p-3 rounded-full hover:bg-purple-600 shadow-lg"
            >
              <FaTimes />
            </button>

            {/* Certificate Image */}
            <img
              src={selectedCert.image}
              alt="certificate preview"
              className="w-full rounded-lg shadow-lg"
            />

          </div>

        </div>
      )}

    </section>
  );
}

export default Certifications;