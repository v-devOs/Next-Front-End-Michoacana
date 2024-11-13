import React from 'react'

interface Props {
  title: string,
  subtitle?: string
}

export const CristalDiv = ({ title, subtitle }: Props) => {
  return (
    <div className="backdrop-blur-sm bg-dark/15 p-2 rounded-sm h-[300px] w-[400px]">
      <h2 className="text-yellow-500 font-bold text-2xl">{title}</h2>
      <p className="text-gray-500">
        {subtitle}
      </p>
    </div>
  )
}
