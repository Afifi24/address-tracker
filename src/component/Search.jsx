import React from 'react'
import arrow from '../images/icon-arrow.svg'
const Search = ({InputHalndeler,setIput,input,Searchfunction,setSearch}) => {
  return (
    <div className='absolute top-5 md:top-10 left-1/2 -translate-x-2/4 '>
      <form className='flex items-center' onSubmit={Searchfunction} >
        <input onChange={InputHalndeler} value={input} className='w-56 text-md outline-none rounded-tl-md rounded-bl-md py-3  md:w-96  px-4 md:py-2' type="text" placeholder='Search for any IP address or domaine' />
        <button className='bg-black text-white px-3 rounded-tr-lg rounded-br-lg py-3 h-10 w-10 grid place-items-center  md:py-2' ><img src={arrow} className='' alt="" /></button>
      </form>

    </div>
  )
}

export default Search