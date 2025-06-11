import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import img4 from "../assets/img4.webp";


const slides = [
  {
    image: "/images/volunteer1.jpg",
    title: "Empower Volunteers",
    description: "Connect, support, and engage with passionate individuals.",
  },
  {
    image: "/images/volunteer2.jpg",
    title: "Manage Easily",
    description: "Organize tasks, schedules, and reports effortlessly.",
  },
  {
    image: "/images/volunteer3.jpg",
    title: "Celebrate Impact",
    description: "Recognize contributions and share achievements.",
  },
  {
    image: "/images/volunteer4.jpg",
    title: "Train with Purpose",
    description: "Offer skill-building and meaningful mentorship.",
  },
  {
    image: "/images/volunteer5.jpg",
    title: "Build Communities",
    description: "Unite people with causes that matter.",
  },
];

const stats = [
  { label: "Volunteers", value: 1245 },
  { label: "Events Organized", value: 134 },
  { label: "Hours Served", value: 8765 },
];

const volunteerRoles = [
  {
    icon: "🤝",
    title: "Community Helper",
    desc: "Assist with outreach and on-site event coordination.",
  },
  {
    icon: "📝",
    title: "Administrative Support",
    desc: "Help with data entry, scheduling, and communications.",
  },
  {
    icon: "🎤",
    title: "Spokesperson",
    desc: "Represent the organization in local events and media.",
  },
];

const events = [
  {
    des: "Join us to clean and protect our beautiful beaches.Together, we can keep the shoreline safe and pollution",
    title: "Beach Cleanup Drive",
    image: img2,
  },
  {
    des: "Help us sort and pack nutritious food for those in need.Your time can bring hope and hunger relief to many families.",
    title: "Food Bank Volunteer Day",
    image: img3,
  },
  {
    des: "Empower young minds through guidance and support.Join us to inspire the next generation of leaders.",
    title: "Youth Mentoring Workshop",
    image: img4,
  },
];

const faqs = [
  {
    question: "How do I become a volunteer?",
    answer:
      "Simply sign up through our Volunteer Signup page and attend an orientation session.",
  },
  {
    question: "Is there a minimum time commitment?",
    answer: "No, you can volunteer as much or as little as you want.",
  },
  {
    question: "Do I need prior experience?",
    answer: "No experience necessary! Training is provided for all roles.",
  },
];

export default function HomePage() {
  const [faqOpenIndex, setFaqOpenIndex] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const toggleFaq = (index) =>
    setFaqOpenIndex(faqOpenIndex === index ? null : index);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-100 to-blue-100 text-white">
      {/* Header */}
      <header className="p-6 text-center">
  <motion.h1
    initial={{ opacity: 0, y: -50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
    className="text-3xl md:text-5xl font-extrabold font-poppins bg-gradient-to-r from-blue-900 via-indigo-900 text-transparent bg-clip-text drop-shadow-md transition-all duration-500"
  >
    Volunteer Management System
  </motion.h1>
  <motion.p
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 0.5, duration: 1 }}
    className="mt-3 text-base md:text-xl text-gray-700 dark:text-gray-700 font-poppins transition-all duration-500"
  >
    Organize, Engage, and Appreciate Volunteers Effectively
  </motion.p>
</header>


      {/* Slideshow */}
      <section className="max-w-6xl mx-auto p-6 bg-blue-50 rounded-xl">
  <div className="flex flex-col md:flex-row items-center gap-6">
    {/* Left Image */}
    <img
      src={img1} // Replace with your actual image path
      alt="Volunteer"
      className="w-full md:w-1/2 rounded-xl shadow-lg object-cover"
    />

    {/* Right Text */}
    <div className="text-center md:text-left md:w-1/2">
      <h2 className="text-3xl font-bold text-blue-700 mb-3">Join the Movement</h2>
      <p className="text-lg text-gray-700">
        Be a part of VolunteerHub and help bring positive change to your community. Connect, serve, and grow together.
      </p>
    </div>
  </div>
</section>



      {/* Why VolunteerHub */}
      <section className="text-center px-6 py-12 bg-white text-black">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose VolunteerHub?</h2>
        <p className="max-w-3xl mx-auto text-lg">
          Whether you're a nonprofit looking to manage your volunteer workforce or a passionate individual seeking to give back to the community, VolunteerHub makes it easier to connect, collaborate, and celebrate impact.
        </p>
      </section>

      {/* Events */}
      <section className="py-12 px-6 bg-pink-100 text-black">
        <h2 className="text-3xl font-bold text-center mb-8">Get Involved </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {events.map((event, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow-md overflow-hidden transition hover:scale-105"
            >
              <img src={event.image} alt={event.title} className="w-full h-40 object-cover" />
              <div className="p-4">
                
                <h3 className="text-xl font-semibold">{event.title}</h3>
                <p className="text-sm text-gray-600">{event.des}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Roles */}
      <section className="py-12 px-6 bg-white text-black">
        <h2 className="text-3xl font-bold text-center mb-8">Volunteer Roles</h2>
        <div className="grid md:grid-cols-3 gap-6 text-center">
          {volunteerRoles.map((role, i) => (
            <div key={i} className="bg-gray-100 p-6 rounded-lg shadow hover:shadow-xl">
              <div className="text-4xl mb-2">{role.icon}</div>
              <h3 className="text-xl font-semibold">{role.title}</h3>
              <p className="text-gray-700 mt-2">{role.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-gradient-to-r from-indigo-700 to-purple-700 text-white">
        <div className="max-w-4xl mx-auto grid md:grid-cols-3 text-center gap-6">
          {stats.map((stat, idx) => (
            <div key={idx}>
              <div className="text-4xl font-bold">{stat.value}</div>
              <p className="text-lg mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQs */}
      {/* FAQ Section */}
      <section className=" py-7 px-6  bg-white">
        <h2 className="text-3xl font-bold text-center mb-6 text-indigo-900">FAQs</h2>
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white text-black rounded-lg p-4">
              <button
                onClick={() => toggleFaq(index)}
                className="w-full text-left text-lg font-semibold flex justify-between items-center"
              >
                {faq.question}
                <span>{faqOpenIndex === index ? "−" : "+"}</span>
              </button>
              {faqOpenIndex === index && (
                <p className="mt-2 text-gray-700">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
