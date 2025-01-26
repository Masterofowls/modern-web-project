"use client"

import { motion } from "framer-motion"
import { useTranslations } from "next-intl"
import { Zap, Shield, Smartphone } from "lucide-react"

export default function Features() {
  const t = useTranslations("common")

  const features = [
    { icon: <Zap size={24} />, title: t("feature1Title"), description: t("feature1Desc") },
    { icon: <Shield size={24} />, title: t("feature2Title"), description: t("feature2Desc") },
    { icon: <Smartphone size={24} />, title: t("feature3Title"), description: t("feature3Desc") },
  ]

  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-12 text-center"
        >
          {t("featuresTitle")}
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <div className="text-blue-500 mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

