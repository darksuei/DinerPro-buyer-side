import React from 'react'

function TitleBox({title}) {
  return (
    <h3
        className='font-IBM sm:text-[24px] font-[400] capitalize text-center w-[90%] m-auto text-[1rem] '>
        {title}
    </h3>
  )
}

export default TitleBox
