"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { useTranslations } from "next-intl"

export default function Newsletter() {
  const [email, setEmail] = useState("")
  const t = useTranslations("common")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle newsletter signup logic here
    console.log("Newsletter signup:", email)
    // Reset form field
    setEmail("")
  }

  return (
    <section className="py-20 bg-blue-500 text-white">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-8 text-center"
        >
          {t("newsletterTitle")}
        </motion.h2>
        <motion.form
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          onSubmit={handleSubmit}
          className="max-w-md mx-auto flex"
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={t("emailPlaceholder")}
            className="flex-grow px-4 py-2 rounded-l-lg focus:outline-none text-gray-900"
            required
          />
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="bg-yellow-400 text-blue-900 font-bold py-2 px-6 rounded-r-lg hover:bg-yellow-300 transition-colors"
          >
            {t("subscribe")}
          </motion.button>
        </motion.form>
      </div>
    </section>
  )
}

