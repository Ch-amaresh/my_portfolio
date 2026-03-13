import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

/* Rocket SVG component */
function Rocket() {
  return (
    <div className="rocket-launch">
      <svg width="40" height="80" viewBox="0 0 40 80">

        {/* Rocket body */}
        <rect x="14" y="10" width="12" height="40" rx="6" fill="#e5e7eb"/>

        {/* Rocket nose */}
        <polygon points="20,0 28,12 12,12" fill="#f87171"/>

        {/* Window */}
        <circle cx="20" cy="25" r="4" fill="#60a5fa"/>

        {/* Wings */}
        <polygon points="14,40 6,50 14,50" fill="#ef4444"/>
        <polygon points="26,40 34,50 26,50" fill="#ef4444"/>

        {/* Flame */}
        <polygon
          className="rocket-flame"
          points="20,50 14,70 26,70"
          fill="orange"
        />

      </svg>
    </div>
  );
}

function Contact() {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");
  const [launch, setLaunch] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    setLoading(true);
    setStatus("");

    emailjs
      .sendForm(
        "service_z7hp3dw",
        "template_vpb9zuk",
        form.current,
        "a2nplxmg9JUDzMMAf"
      )
      .then(
        () => {
          form.current.reset();
          setLoading(false);
          setLaunch(true);
          setStatus("Message sent successfully");

          setTimeout(() => {
            setLaunch(false);
            setStatus("");
          }, 3000);
        },
        () => {
          setLoading(false);
          setStatus("Failed to send message ❌");

          setTimeout(() => {
            setStatus("");
          }, 3000);
        }
      );
  };

  return (
    <section id="contact" className="py-24">
      <div className="max-w-3xl mx-auto px-6">

        <h2 className="text-3xl font-bold text-center mb-16">
          Contact Me
        </h2>

        <form
          ref={form}
          onSubmit={sendEmail}
          className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-10 space-y-6
          shadow-lg transition-all duration-500
          hover:shadow-[0_0_60px_rgba(59,130,246,0.7)]
          hover:border-blue-400"
        >

          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
            className="w-full p-3 rounded-lg bg-transparent border border-gray-600 focus:border-purple-500 outline-none"
          />

          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
            className="w-full p-3 rounded-lg bg-transparent border border-gray-600 focus:border-purple-500 outline-none"
          />

          <input
            type="tel"
            name="user_phone"
            placeholder="Contact Number"
            required
            className="w-full p-3 rounded-lg bg-transparent border border-gray-600 focus:border-purple-500 outline-none"
          />

          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            required
            className="w-full p-3 rounded-lg bg-transparent border border-gray-600 focus:border-purple-500 outline-none"
          ></textarea>

          {/* Button + Rocket */}
          <div className="relative flex justify-center">

            {launch && <Rocket />}

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 bg-purple-500 rounded-lg hover:bg-purple-600 transition text-lg disabled:opacity-50"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>

          </div>

          {status && (
            <p className="text-center mt-4 text-green-400">
              {status}
            </p>
          )}

        </form>

      </div>
    </section>
  );
}

export default Contact;