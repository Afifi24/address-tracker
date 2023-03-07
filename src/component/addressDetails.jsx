import React from 'react'

const AddressDetails = ({data}) => {
  return (
    <div className='box w-full '>
        <div className='w-4/5 mx-auto h-48 items-center text-center flex flex-col md:flex-row justify-between  md:h-28  p-5  md:p-10 gap-2  bg-white rounded-xl shadow-xl md:text-left'>
           <div className='md:border-r pl-2  w-56'>
            <h4 className='text-gray-500 text-[7px] md:text-xs font-bold md:mb-1'>IP ADDRESS</h4>
            <h3 className='text-sm md:text-xl font-bold'>{data.ip}</h3>
           </div>
           <div className='md:border-r pl-2 w-56'>
            <h4 className='text-gray-500 text-[7px] md:text-xs font-bold md:mb-1'>LOCATION</h4>
            {data.location && 
            <h3 className='text-sm md:text-xl  font-bold'>{data.location.city},{data.location.country}</h3>
            }
           </div>
           <div className='md:border-r pl-2 w-56'>
            <h4 className='text-gray-500 text-[7px] md:text-xs font-bold md:mb-1'>TIMEZONE</h4>
           {data.location &&
            <h3 className='text-sm md:text-xl  font-bold'>UTC{data.location.timezone}</h3>
          }
           </div>
           <div className=' pl-2 w-56'>
            <h4 className='text-gray-500 text-[7px] md:text-xs font-bold md:mb-1'>ISP</h4>
            <h3 className='text-sm md:text-xl  font-bold'>{data.isp}</h3>
           </div>
        </div>
    </div>
  )
}

export default AddressDetails