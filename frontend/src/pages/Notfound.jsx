import React from 'react'
import { Link } from 'react-router-dom'
const Notfound = () => {
  return (
    <div className='min-h-screen bg-cover bg-center flex flex-col justify-center items-center text-white'
    style={{backgroundImage:"url('/broken_by_andreewallin_d1hf7up.jpg')"}}>
      <header className='absolute top-0 left-0 p-4 bg-black w-full'>
        <Link to={"/"}>
        <img src="/netflix-logo.png" className='h-8' alt="" />
        </Link>
      </header>
      <div className='text-center z-10 bg-black/20 p-4'>
        <h1 className='text-7xl font-semibold mb-4'>Lost your way?</h1>
        <p className='mb-6 text-xl'>
            Sorry, we can't find that page. You'll find lots to explore on the home page.
        </p>
        <Link to={"/"}
        className='bg-white text-black py-2 px-4 rounded'>
        Netflix home
        </Link>
      </div>
    </div>
  )
}

export default Notfound
