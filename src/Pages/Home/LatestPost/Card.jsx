import React from 'react'
import { BsArrowRight } from 'react-icons/bs'
import { Link } from 'react-router-dom'

const Card = ({date,title,image}) => {
  return (
    <div className='border rounded-2xl p-4 max-w-80'>
        <p className='text-orange-500'>{date}</p>
        <h3 className='text-lg font-bold mt-4'>{title}</h3>
        <img src={image} alt="story image" className='h-64 w-64 rounded-2xl object-cover my-4' />
        <Link to={"/"} className='text-orange-500 group'>
            <button className='flex justify-start items-center gap-2'>
                <span className='group-hover:text-black duration-200'>Read More</span>
                <BsArrowRight className='w-5 h-5 text-white bg-orange-500 rounded-full p-1 group-hover:bg-black duration-300' />
            </button>
        </Link>
    </div>
  )
}

export default Card