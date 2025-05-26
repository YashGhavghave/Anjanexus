import React from "react";
import { Brain, Code, Globe, Layers, Server, Zap } from "lucide-react"; // icons from lucide-react

const services = [
  {
    title: "Machine Learning",
    icon: <Brain className="h-10 w-10 text-blue-500" />,
    description: "Build intelligent systems that learn and adapt from data to solve complex problems.",
  },
  {
    title: "Deep Learning",
    icon: <Zap className="h-10 w-10 text-purple-500" />,
    description: "Implement neural networks to handle image, text, and sequence-based tasks with precision.",
  },
  {
    title: "AI-based Solutions",
    icon: <Server className="h-10 w-10 text-pink-500" />,
    description: "Custom AI models tailored to automate processes and deliver smart insights.",
  },
  {
    title: "Web Development",
    icon: <Code className="h-10 w-10 text-green-500" />,
    description: "Modern and scalable websites built using React, Tailwind, and the latest web technologies.",
  },
  {
    title: "WordPress Development",
    icon: <Globe className="h-10 w-10 text-yellow-500" />,
    description: "Responsive and SEO-friendly WordPress sites for blogs, businesses, and portfolios.",
  },
  {
    title: "Custom Projects",
    icon: <Layers className="h-10 w-10 text-red-500" />,
    description: "End-to-end project development from concept to deployment, tailored to your goals.",
  },
];

const ServicesPage = () => {
  return (
    <div className="min-h-screen px-6 py-12 bg-gray-100 text-gray-800">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4">Our Services</h2>
        <p className="text-center text-lg mb-10 text-gray-600">
          Empowering your ideas with advanced technology and tailored development.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition duration-300"
            >
              <div className="flex items-center justify-center mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-center mb-2">{service.title}</h3>
              <p className="text-center text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
