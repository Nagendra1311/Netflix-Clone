import React, { useState } from 'react'
import axios from 'axios';
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setUser } from '../redux/reducers/UserReducer';
const initialState = {
    name: '',
    email: '',
    password: ''
}


export default function Login() {
    const [login, setLogin] = useState(true)
    const [loading, setLoading] = useState(false)
    const [formData, setFormData] = useState(initialState)
    const navigate = useNavigate();
    const dispatch = useDispatch();

    let { name, email, password } = formData;

    const inputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }
    const submit = async (e) => {
        e.preventDefault();
        setLoading(true)
        if (login) {

            try {
                let res = await axios.post('http://localhost:8000/api/user/login', formData, { withCredentials: true })
                if (res.data.success) {
                    toast.success(res.data.message, {
                        position: "top-center"
                    })
                }
                console.log(res);
                dispatch(setUser(res.data.user))

                navigate('/browse')

            } catch (error) {
                toast.error(error.response.data.message, {
                    position: "top-center"
                })
            } finally {
                setLoading(false)
            }

        } else {
            try {
                const res = await axios.post('http://localhost:8000/api/user/register', formData, { withCredentials: true })
                if (res.data.success) {
                    toast.success(res.data.message)
                }
                setLogin(true)

            } catch (error) {
                toast.error(error.response.data.message, {
                    position: "top-center"
                })

            } finally {
                setLoading(false)
            }
        }
    }
    return (
        <div>
            <div className='absolute'>
                <img className='w-[100vw] h-[100vh] ' src="https://genotipia.com/wp-content/uploads/2020/04/Netflix-Background-prueba-1.jpg" alt="" />
            </div>
            <form onSubmit={submit} className='absolute flex flex-col md:w-3/12   justify-center items-center mx-auto my-36 left-0 right-0 rounded-md  bg-black placeholder opacity-90 ' >
                <div className='flex flex-col p-10 text-white'>
                    <h1 className='text-3xl font-bold m-auto mb-5'>{login ? "Login" : "Sign Up"}</h1>
                    {
                        !login && (
                            <input type="text" name='name' value={name} onChange={inputChange} placeholder='Full Name' className='text-lg rounded-sm p-3 my-3 outline-none bg-gray-800 text-white' />
                        )
                    }
                    <input type="email" name='email' value={email} onChange={inputChange} placeholder='Email' className='text-lg rounded-sm p-3 my-3 outline-none bg-gray-800 text-white' />
                    <input type="password" name='password' value={password} onChange={inputChange} placeholder='Password' className='text-lg rounded-sm p-3 my-3 outline-none bg-gray-800 text-white' />
                    <button className='bg-red-600 p-3 font-semibold rounded-sm '>{loading ? "Loading...." : (login ? "Login" : "Sign Up")}</button>
                    <p className=''>{login ? "Don't have an account ?" : "Already have an acoount ?"} <span className='text-red-500 cursor-pointer' onClick={() => setLogin(!login)}>{login ? "Register" : "Login"}</span> </p>
                </div>
            </form>
        </div>
    )
}
