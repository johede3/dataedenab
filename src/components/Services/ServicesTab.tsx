"use client"
import { JSX, useState } from "react"
import {
  FiCheckCircle,
  FiChevronDown,
  FiCode,
  FiGlobe,
  FiShield,
  FiSmartphone,
  FiTrendingUp,
  FiUsers,
} from "react-icons/fi"
import { servicesDetails } from "../../app/data/services"

const iconMap: { [key: string]: JSX.Element } = {
  FiGlobe: <FiGlobe size={20} />,
  FiTrendingUp: <FiTrendingUp size={20} />,
  FiCheckCircle: <FiCheckCircle size={20} />,
  FiSmartphone: <FiSmartphone size={20} />,
  FiCode: <FiCode size={20} />,
  FiUsers: <FiUsers size={20} />,
  FiShield: <FiShield size={20} />,
}

export default function ServicesTab() {
  const [activeTab, setActiveTab] = useState("webbutveckling")
  const [expanded, setExpanded] = useState<string | null>(null)

  return (
    <>
      {/* 🔥 Tabs for Desktop */}
      <div className="hidden sm:block">
        <div className="mt-4 flex justify-center gap-4">
          {servicesDetails.map((service) => (
            <button
              key={service.id}
              onClick={() => setActiveTab(service.id)}
              className={`cursor-pointer rounded-full px-4 py-2 text-sm font-medium whitespace-nowrap shadow-md transition-all ${
                activeTab === service.id
                  ? "scale-100 bg-purple-600 text-white shadow-lg ring-2 ring-purple-400"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300 hover:shadow-lg"
              }`}
            >
              {service.title}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        {servicesDetails.map((section) => (
          <div key={section.id} className={activeTab === section.id ? "block" : "hidden"}>
            <h3 className="mt-6 text-center text-lg font-semibold">{section.title}</h3>
            <p className="mt-2 text-center text-sm text-gray-600">{section.description}</p>

            <div className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-3">
              {section.services.map((service) => (
                <ServiceCard
                  key={service.title}
                  icon={iconMap[service.icon]}
                  title={service.title}
                  description={service.description}
                />
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* 🔥 Accordion for Mobile */}
      <div className="sm:hidden">
        {servicesDetails.map((section) => (
          <div key={section.id} className="border-b border-gray-300">
            <button
              className="flex w-full items-center justify-between px-4 py-3 text-left text-lg font-medium text-gray-800 dark:text-white"
              onClick={() => setExpanded(expanded === section.id ? null : section.id)}
            >
              {section.title}
              <FiChevronDown
                className={`transform transition-transform ${expanded === section.id ? "rotate-180" : ""}`}
              />
            </button>

            {expanded === section.id && (
              <div className="px-4 pb-4">
                <p className="text-sm text-gray-600">{section.description}</p>

                <div className="mt-4 grid grid-cols-1 gap-4">
                  {section.services.map((service) => (
                    <ServiceCard
                      key={service.title}
                      icon={iconMap[service.icon]}
                      title={service.title}
                      description={service.description}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  )
}

/* COMPONENTS FOR UI CARDS */
function ServiceCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="flex flex-col items-center rounded-lg p-4 text-center shadow-lg dark:bg-gray-800">
      <div className="text-purple-600">{icon}</div>
      <h3 className="mt-2 text-lg font-semibold">{title}</h3>
      <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">{description}</p>
    </div>
  )
}
