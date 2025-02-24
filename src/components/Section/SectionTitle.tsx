"use client"

import React from "react"

interface SectionTitleProps {
  children: React.ReactNode
}

const SectionTitle: React.FC<SectionTitleProps> = ({ children }) => {
  return <div className="text-3xl font-bold lg:text-5xl lg:leading-tight">{children}</div>
}

export default SectionTitle
