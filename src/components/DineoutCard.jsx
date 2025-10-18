import React from 'react'

function DineoutCard({ dineoutData }) {
  return (
    <div className='w-80 flex-none rounded-2xl shadow  mb-8  '>
<a target='_blank' href={dineoutData?.cta?.link}>
    <div className=' w-full h-50  relative'>
        <h1 className='absolute bottom-4 left-4 font-bold text-white z-10'>{dineoutData?.info?.name}</h1>
        <h1 className='absolute bottom-4 right-4 font-bold text-white z-10'>*{dineoutData?.info?.rating?.value}</h1>
        <div className='absolute bg-gradient-to-t from-black h-16 bottom-0 left-0 right-0'></div>
        <img  className='w-80 h-50 rounded-2xl' src={`https://media-assets.swiggy.com/swiggy/image/upload/${dineoutData?.info?.mediaFiles[0]?.url}`} alt="" />
    </div>
     <div className=' flex justify-between container  mx-auto'>
      <Ptag text={dineoutData?.info?.cuisines?.map(cuisine => cuisine).join(" • ")}/>
      <Ptag text={dineoutData?.info?.costForTwo}/>
     </div>
     <div  className=' flex justify-between container  mx-auto'>
      <p className='mx-4 '>{dineoutData?.info?.locationInfo?.formattedAddress}</p>
      <p className='mx-4 '>{dineoutData?.info?.locationInfo?.distanceString}</p>

     </div>
     
      {dineoutData?.info?.offerInfoV2?.otherOffers?.offers?.[0]?.header && 
       <div className='bg-[#1ba672] text-white font-bold m-4 py-2 px-4 rounded-lg'>{dineoutData?.info?.offerInfoV2?.otherOffers?.offers?.[0]?.header} on pre-booking</div> 
      }
      { dineoutData?.info?.customerOffer?.info?.description && 
      <div className='bg-[#c8f9e5] text-[#1ba672] font-bold m-4 py-2 px-4 rounded-lg'>{dineoutData?.info?.customerOffer?.info?.description}</div>
      }
  
     </a>
    </div>
  )
}

export default DineoutCard