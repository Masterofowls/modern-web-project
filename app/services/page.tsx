"use client"

import { motion } from "framer-motion"

export default function Services() {
  const services = [
    { title: "Web Development", description: "Custom web applications tailored to your needs." },
    { title: "UI/UX Design", description: "Creating intuitive and beautiful user interfaces." },
    { title: "Mobile App Development", description: "Native and cross-platform mobile applications." },
    { title: "Cloud Solutions", description: "Scalable and reliable cloud infrastructure setup." },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.h1
          className="text-4xl font-bold mb-8 text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Our Services
        </motion.h1>
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <h2 className="text-2xl font-semibold mb-4">{service.title}</h2>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

