"use client"

import { motion } from "framer-motion"
import { useTranslations } from "next-intl"
import { Star } from "lucide-react"

export default function Testimonials() {
  const t = useTranslations("common")

  const testimonials = [
    { name: t("testimonial1Name"), role: t("testimonial1Role"), content: t("testimonial1Content") },
    { name: t("testimonial2Name"), role: t("testimonial2Role"), content: t("testimonial2Content") },
    { name: t("testimonial3Name"), role: t("testimonial3Role"), content: t("testimonial3Content") },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-12 text-center"
        >
          {t("testimonialsTitle")}
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="text-yellow-400" size={20} />
                ))}
              </div>
              <p className="text-gray-600 mb-4">{testimonial.content}</p>
              <div className="font-semibold">{testimonial.name}</div>
              <div className="text-sm text-gray-500">{testimonial.role}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

