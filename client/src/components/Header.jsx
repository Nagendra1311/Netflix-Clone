import axios from 'axios';
import React from 'react'
import { IoIosArrowDropdown } from "react-icons/io";
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { setUser } from '../redux/reducers/UserReducer';
import { Link, useNavigate } from 'react-router-dom';
import { setToogle } from '../redux/reducers/Movies.reducer';

export default function Header() {
    const user = useSelector(store => store.app.user)
    const toggle = useSelector((store) => store.movie.toggle)
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handlelogout = async () => {
        try {
            const res = await axios.get('http://localhost:8000/api/user/logout')
            toast.success(res.data.message, {
                position: "top-center"
            })
            dispatch(setUser(null))
            navigate('/')

        } catch (error) {

        }
    }
    const searchhandle = () => {
        dispatch(setToogle())
    }

    return (
        <div className='z-10 absolute w-[100%] flex justify-between px-8 bg-gradient-to-b from-black'>
            <Link to='/browse'> <img className='w-56' src="https://logodownload.org/wp-content/uploads/2014/10/netflix-logo-1.png" alt="Netflix" /></Link>
            {
                user && (
                    <div div className='flex items-center'>
                        <IoIosArrowDropdown size='24' color='white' />
                        <h1 className='text-lg font-semibold text-white'>{user.name}</h1>
                        <div className='ml-4 space-x-2'>
                            <button className='bg-red-700 px-4 py-2 text-white' onClick={handlelogout}>Logout</button>
                            <button className='bg-red-700 px-4 py-2 text-white' onClick={searchhandle}>{toggle ? "Home" : "Search Movie"} </button>
                        </div>
                    </div>
                )
            }
        </div >
    )
}
