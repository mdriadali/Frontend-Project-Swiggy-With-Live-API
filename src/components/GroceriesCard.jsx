import React from 'react'
import H1Tag from './H1Tag'

const GroceriesCard = ({groceriesData}) => {
  return (
    <div className='flex-none' >
    <a className='container mx-auto' href={groceriesData?.action?.link}>
    <img  className="w-40 h-50 object-cover" src={`https://media-assets.swiggy.com/swiggy/image/upload/${groceriesData?.imageId}`} />
    <h3 className='text-lg font-semibold w-[60%] text-center container mx-auto'>{groceriesData?.action?.text}</h3>
    </a>
    </div>
  )
}

export default GroceriesCard