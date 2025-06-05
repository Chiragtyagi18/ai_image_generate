import React from 'react'

type props = {
  heading : string
}

const SectionHeading = ({heading} : props) => {
  return (
    <div className='w-[80%]  m-auto'>
        <h1 className='text-2xl lg-text-3xl font-bold text-white'>{heading}</h1>
        <p className='text-sm sm:text-base md:text-lg font-medium mt-2 text-gray-200'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto quas rerum quasi eum temporibus, aperiam sequi ullam esse et veritatis? Inventore magnam eligendi voluptatem at ipsum suscipit sint rem dolore!</p>
      
    </div>
  )
}

export default SectionHeading
