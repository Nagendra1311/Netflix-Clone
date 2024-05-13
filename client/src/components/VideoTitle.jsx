import React from 'react'
import { IoPlayOutline } from "react-icons/io5";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { Link } from 'react-router-dom';

export default function VideoTitle({ title, overview }) {
    return (
        <div className='absolute w-[100%] aspect-video text-white pt-[18%] p-12'>
            <h1 className='text-3xl font-bold'>{title}  </h1>
            <p className='w-1/3'>{overview}</p>
            <div className='flex mt-8 space-x-3'>
                <Link to="/moviedetails"><button className='flex items-center bg-white text-black rounded-md hover:bg-opacity-80  py-2 px-6 '>
                    <IoPlayOutline size={24} /> <span>Play</span>
                </button></Link>
                <button className='flex items-center bg-gray-400 text-black rounded-md hover:bg-white  py-2 px-6 '>
                    <IoIosInformationCircleOutline size={24} />
                    <span>Watch More</span></button>
            </div>
        </div>
    )
}
