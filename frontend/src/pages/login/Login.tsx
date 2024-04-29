import React from 'react'
import { Link } from 'react-router-dom'

function Login() {
    return (
        <div className='flex fle-col min-w-96 mx-auto items-center justify-center'>

            <div className='w-full p-6 rounded-lg shadow-2xl bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
                <h1 className=' text-3xl font-semibold text-center pb-3'>
                    Login
                    <span className=' text-indigo-200'> ChatApp</span>
                </h1>

                <form>
                    <div>
                        <label className='label p-2'>
                            <span className='text-base label-text'>
                                Username
                            </span>
                        </label>
                        <input type='text' placeholder='Enter username' className='w-full input input-bordered h-10'/>
                    </div>

                    <div>
                        <label className='label p-2'>
                            <span className='text-base label-text'>
                                Password
                            </span>
                        </label>
                        <input type='password' placeholder='Enter password' className='w-full input input-bordered h-10'/>

                    </div>
                    <Link to='/signup' className='text-sm text-gray-400 hover:underline hover:text-indigo-200 mt-2 flex px-2'>
                        {`Don't Have an account`}
                    </Link>

                    <div>
                        <button className='btn btn-block btn-sm mt-2'>
                            Login
                        </button>
                    </div>

                </form>
               
            </div>
        </div>
    )
}

export default Login