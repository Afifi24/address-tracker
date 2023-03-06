import React from 'react'

const Search = () => {
  return (
    <div className='absolute top-5 md:top-10 left-1/2 -translate-x-2/4 '>
      <div className='flex items-center'>
        <input className='w-56 text-md outline-none rounded-tl-md rounded-bl-md py-3  md:w-96  px-4 md:py-2' type="text" placeholder='Search for any IP address or domaine' />
        <button className='bg-black text-white px-3 rounded-tr-md rounded-br-md py-3 md:py-2'>arrow</button>
      </div>

    </div>
  )
}

export default Search