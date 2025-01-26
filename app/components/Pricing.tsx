"use client"

import { motion } from "framer-motion"
import { useTranslations } from "next-intl"
import { Check } from "lucide-react"

export default function Pricing() {
  const t = useTranslations("common")

  const plans = [
    {
      name: t("basicPlan"),
      price: t("basicPrice"),
      features: [t("basicFeature1"), t("basicFeature2"), t("basicFeature3")],
    },
    {
      name: t("proPlan"),
      price: t("proPrice"),
      features: [t("proFeature1"), t("proFeature2"), t("proFeature3"), t("proFeature4")],
    },
    {
      name: t("enterprisePlan"),
      price: t("enterprisePrice"),
      features: [
        t("enterpriseFeature1"),
        t("enterpriseFeature2"),
        t("enterpriseFeature3"),
        t("enterpriseFeature4"),
        t("enterpriseFeature5"),
      ],
    },
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
          {t("pricingTitle")}
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-lg shadow-md flex flex-col"
            >
              <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
              <div className="text-4xl font-bold mb-6">{plan.price}</div>
              <ul className="mb-8 flex-grow">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center mb-2">
                    <Check className="text-green-500 mr-2" size={20} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors"
              >
                {t("choosePlan")}
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

