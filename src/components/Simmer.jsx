import React from 'react'

const Simmer = () => {
  // Build the list of skeleton elements using a for-loop (no Array.map)
  const items = []
  for (let i = 0; i < 20; i++) {
    items.push(
      <div key={i} className="w-[20%]  mx-5 mb-4">
        <div className=" w-70 h-45 rounded-3xl  bg-gray-300" />
        <div className="mx-4 w-45 h-3 my-1 bg-gray-300" />
        <div className="mx-4 w-32 h-2.5 my-1 bg-gray-300" />
        <div className="mx-4 w-20 h-2 my-1 bg-gray-300" />
      </div>
    )
  }

  return (
    <>
      <div className="w-[90%] container mx-auto flex flex-wrap my-5 gap-4">
        {items}
      </div>
    </>
  )
}

export default Simmer