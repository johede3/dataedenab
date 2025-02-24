"use client"

import React from "react"

interface SectionTitleProps {
  children: React.ReactNode
}

const SectionTitle: React.FC<SectionTitleProps> = ({ children }) => {
  return <h2 className="text-3xl font-bold text-gray-900 dark:text-white">{children}</h2>
}

export default SectionTitle
