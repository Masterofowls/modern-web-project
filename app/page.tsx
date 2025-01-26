"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import Hero from "@/components/Hero"
import Features from "@/components/Features"
import ContactForm from "@/components/ContactForm"

export default function Home() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])

  return (
    <div className="min-h-screen" ref={ref}>
      <motion.div
        style={{
          backgroundImage: "url('/placeholder.svg?height=1080&width=1920')",
          backgroundPosition: "center",
          backgroundSize: "cover",
          y: backgroundY,
        }}
        className="fixed inset-0 z-[-1]"
      />
      <Hero />
      <Features />
      <ContactForm />
    </div>
  )
}

