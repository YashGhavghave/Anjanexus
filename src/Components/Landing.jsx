import React from "react";

const LandingPage = ({ contactRef }) => {
  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="h-screen w-full bg-[url('https://cdn.pixabay.com/photo/2025/04/30/05/57/bay-9568512_1280.jpg')] bg-cover bg-no-repeat bg-fixed relative">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-10"></div>

      {/* Content */}
      <div className="relative z-20 h-full flex items-center justify-center px-4">
        <div className="bg-black bg-opacity-70 rounded-2xl shadow-lg p-8 sm:p-12 w-full max-w-2xl text-center">
          <h1 className="text-white text-4xl sm:text-5xl font-bold mb-6">
            Welcome to <span className="text-blue-400">AnjaNexus</span>
          </h1>
          <p className="text-gray-300 text-lg mb-6">
            Where Innovation Meets Design & Development.
          </p>
          <button
            onClick={scrollToContact}
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg transition"
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
