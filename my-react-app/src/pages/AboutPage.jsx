import React from "react";
import { motion } from "framer-motion";
import img5 from '../assets/img5.jpg'
import img6 from '../assets/img6.webp'
import img7 from '../assets/img7.jpg'
import img8 from '../assets/img8.jpg'
import img9 from '../assets/img9.jpg'
import img10 from '../assets/img10.jpg'
import img11 from '../assets/img11.avif'

const dummyEvents = [
  {
    title: "Tree Plantation Drive",
    date: "May 25, 2025",
    description:
      "Join us to plant 500 trees around the city for a greener tomorrow.",
    image:
      img5,
  },
  {
    title: "Blood Donation Camp",
    date: "June 15, 2025",
    description: "Help save lives by participating in our annual blood donation event.",
    image:
      img6,
  },
  {
    title: "Elderly Care Day",
    date: "July 10, 2025",
    description: "Spend a day volunteering at a senior home and bring smiles.",
    image:
     img7,
  },
];


export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br  from-pink-300 to-blue-950 text-white">
      {/* Header */}
      <div className="text-center py-12 px-6 max-w-4xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-3xl md:text-4xl font-bold mb-4 tracking-wide"
        >
          About VolunteerHub
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="text-lg md:text-xl leading-relaxed"
        >
          At VolunteerHub, we empower communities by connecting passionate volunteers
          with organizations that make a difference. Whether you're looking to give back,
          gain skills, or grow your network, we provide a platform designed to make
          volunteering easy, impactful, and rewarding.
        </motion.p>
      </div>

      {/* What is a Volunteer & Organization */}
      <section className="max-w-6xl mx-auto px-6 py-12 space-y-16">
        {/* Volunteer */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="md:flex md:items-center bg-white bg-opacity-10 rounded-xl p-6 shadow-lg"
        >
          <img
            src={img8}
            alt="Volunteer"
            className="md:w-1/2 rounded-lg object-cover mb-6 md:mb-0 md:mr-8"
          />
          <div>
            <h2 className="text-2xl font-semibold mb-4">What is a Volunteer?</h2>
            <p className="leading-relaxed text-lg">
              A volunteer is someone who freely offers their time and skills to support
              causes they care about. Volunteers drive social change by providing
              assistance in community outreach, event coordination, mentoring, and more.
            </p>
          </div>
        </motion.div>

        {/* Organization */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="md:flex md:items-center bg-white bg-opacity-10 rounded-xl p-6 shadow-lg"
        >
          <div className="md:w-1/2 md:order-2 md:ml-8 mb-6 md:mb-0">
            <img
              src={img9}
              alt="Organization"
              className="rounded-lg object-cover w-full"
            />
          </div>
          <div className="md:w-1/2 md:order-1">
            <h2 className="text-2xl font-semibold mb-4">What is an Organization?</h2>
            <p className="leading-relaxed text-lg">
              Organizations are the backbone of community initiatives, offering structured
              programs, resources, and opportunities for volunteers to contribute.
              They facilitate impactful projects and create lasting benefits for society.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Benefits Section */}
      <section className="bg-white bg-opacity-10 max-w-6xl mx-auto rounded-xl px-8 py-12 shadow-lg my-16">
        <h2 className="text-center text-3xl font-bold mb-10">Benefits for Volunteers</h2>
        <div className="md:flex md:items-center md:space-x-12">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <img
              src={img10}
              alt="Benefits"
              className="rounded-xl shadow-lg object-cover w-full"
            />
          </div>
          <div className="md:w-1/2 space-y-8 text-center md:text-left">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-tr from-purple-400 via-pink-400 to-blue-400 rounded-xl p-6 shadow-lg cursor-pointer"
            >
              <h3 className="text-xl font-semibold mb-2">Skill Development</h3>
              <p>Enhance your abilities and gain new experiences in a supportive environment.</p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-tr from-pink-400 via-purple-400 to-indigo-400 rounded-xl p-6 shadow-lg cursor-pointer"
            >
              <h3 className="text-xl font-semibold mb-2">Networking</h3>
              <p>Meet like-minded individuals and expand your personal and professional network.</p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-tr from-blue-400 via-purple-400 to-pink-400 rounded-xl p-6 shadow-lg cursor-pointer"
            >
              <h3 className="text-xl font-semibold mb-2">Certifications</h3>
              <p>Earn certificates for your contributions that boost your resume and opportunities.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Certification Info */}
      <section className="max-w-5xl mx-auto px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="md:flex md:items-center bg-white bg-opacity-20 rounded-xl p-8 shadow-lg"
        >
          <div className="md:w-1/2">
            <h2 className="text-2xl font-bold mb-4 text-center md:text-left">Certification Program</h2>
            <p className="max-w-xl mx-auto md:mx-0 text-center md:text-left leading-relaxed text-lg">
              VolunteerHub offers official certifications that recognize your time and
              impact in various volunteering roles. These certifications are valid proofs
              of your commitment and can be shared with employers, educational
              institutions, or community organizations.
            </p>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0 md:ml-10">
            <img
              src={img11}
              alt="Certification"
              className="rounded-xl shadow-lg object-cover w-full"
            />
          </div>
        </motion.div>
      </section>

      {/* Event Highlights */}
      <section className="bg-white bg-opacity-10 rounded-t-[2rem] px-6 py-12 max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl text-center font-bold mb-10">Highlighted Events</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {dummyEvents.map((event, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-br from-purple-100 via-pink-100 to-blue-100 rounded-xl shadow-lg overflow-hidden cursor-pointer"
            >
              <img src={event.image} alt={event.title} className="h-48 w-full object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                <p className="text-sm text-gray-700 mb-2">{event.date}</p>
                <p className="text-gray-800">{event.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <div className="text-center py-12 px-6">
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-3xl md:text-4xl font-bold mb-4"
        >
          Be the Change. Volunteer Today.
        </motion.h2>
        <p className="text-lg max-w-2xl mx-auto">
          Join a growing network of kind-hearted individuals. Every helping hand counts.
        </p>
      </div>
    </div>
  );
}
