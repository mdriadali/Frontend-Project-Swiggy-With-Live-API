import React from 'react'

const Ptag = ({ text, className }) => {
  return (
  <p className={`mx-4 ${className}`}>{text}</p>
  )
}

export default Ptag