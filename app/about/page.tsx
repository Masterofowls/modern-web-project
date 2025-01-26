"use client"

import { motion } from "framer-motion"

export default function About() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.h1
          className="text-4xl font-bold mb-8 text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          About Modern Web Project
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="mb-4">
            Modern Web Project is a cutting-edge web application built with Next.js, showcasing the latest in web
            development technologies and best practices.
          </p>
          <p className="mb-4">
            Our mission is to provide a robust, scalable, and user-friendly platform that demonstrates the power of
            modern web technologies.
          </p>
          <h2 className="text-2xl font-bold mb-2">Our Technologies</h2>
          <ul className="list-disc list-inside mb-4">
            <li>Next.js for server-side rendering and routing</li>
            <li>React for building user interfaces</li>
            <li>Tailwind CSS for responsive and customizable styling</li>
            <li>TypeScript for type-safe JavaScript</li>
            <li>Framer Motion for smooth animations and transitions</li>
          </ul>
        </motion.div>
      </div>
    </section>
  )
}

