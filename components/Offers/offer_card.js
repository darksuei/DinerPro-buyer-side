import React from 'react'

function OfferCard({name, text, background}) {
  return (
    <div className={`sm:flex sm:py-[2rem] gap-[2rem]`}>
        <div className='w-full flex text-center lg:text-[1.5rem] p-[1rem] text-[1rem] md:text-[1.3rem] font-IBM capitalize font-[400] justify-center items-center'>
            <span>
                <h4 className='text-[2.3rem] max-sm:text-[1.5rem] max-sm:mb-[1rem] font-[700] mb-[2rem] '>{name}</h4>
                <p>{text}</p>
            </span>
        </div>
        <div
            style={{backgroundImage: `url('${background}')`}} 
            className='w-full aspect-[1.3] rounded-[1rem] bg-center bg-cover overflow-hidden'>
        </div>
    </div>
  )
}

export default OfferCard
