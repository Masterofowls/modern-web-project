"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Zap, Shield, Smartphone } from "lucide-react"

export default function Features() {
  const features = [
    {
      icon: <Zap className="w-12 h-12 text-primary" />,
      title: "Lightning Fast",
      description: "Optimized for speed and performance",
    },
    {
      icon: <Shield className="w-12 h-12 text-primary" />,
      title: "Secure by Design",
      description: "Built with security best practices",
    },
    {
      icon: <Smartphone className="w-12 h-12 text-primary" />,
      title: "Fully Responsive",
      description: "Looks great on all devices",
    },
  ]

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="features" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl font-bold text-center mb-12 font-heading text-foreground"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
          transition={{ duration: 0.8 }}
          ref={ref}
        >
          Our Features
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="text-center p-6 bg-card rounded-lg shadow-md"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <div className="flex justify-center mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2 font-heading text-card-foreground">{feature.title}</h3>
              <p className="text-muted-foreground font-sans">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

