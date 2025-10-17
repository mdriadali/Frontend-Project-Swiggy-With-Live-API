import React from 'react'

const H1Tag = ({text, className}) => {
  return (
    <h1 className={`max-w-[80%] container mx-auto font-bold text-2xl mt-20 mb-4 ${className}`}>{text}</h1>
  )
}

export default H1Tag