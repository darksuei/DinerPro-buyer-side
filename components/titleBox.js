import React from 'react'

function TitleBox({title}) {
  return (
    <h3
        className='font-IBM sm:text-[36px] font-[400] capitalize text-center w-[90%] m-auto text-[1.5rem] '>
        {title}
    </h3>
  )
}

export default TitleBox
