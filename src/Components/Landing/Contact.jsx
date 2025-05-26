import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";

const ContactPage = () => {
  const form = useRef();
  const [isSent, setIsSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_y5os5lf',    // Replace with your actual EmailJS Service ID
        'template_mizqcic',   // Replace with your EmailJS Template ID
        form.current,
        '_XXkkje8QaVz8bJ6L'        // Replace with your EmailJS Public Key
      )
      .then(
        () => {
          setIsSent(true);
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center px-4 py-12">
      <div className="bg-gray-800 text-white rounded-2xl shadow-xl w-full max-w-3xl p-8 sm:p-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 text-blue-400">
          Contact Us
        </h2>

        <form ref={form} onSubmit={sendEmail} className="space-y-6">
          <div>
            <label className="block mb-2 text-sm">Full Name</label>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label className="block mb-2 text-sm">Email Address</label>
            <input
              type="email"
              name="email"
              placeholder="you@example.com"
              className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label className="block mb-2 text-sm">Your Message</label>
            <textarea
              rows="5"
              name="message"
              placeholder="Type your message here..."
              className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            ></textarea>
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold transition"
            >
              Send Message
            </button>
          </div>

          {isSent && (
            <p className="text-green-400 text-center mt-4">
              ✅ Your message has been sent!
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
