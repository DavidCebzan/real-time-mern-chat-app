import React from 'react'
import GenderCheckbox from './GenderCheckbox'

function Signup() {
    return (
        <div className=' flex flex-col items-center justify-center min-w-96 mx-auto'>

            <div className='w-full p-6 rounded-lg shadow-2xl bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
                <h1 className=' text-3xl font-semibold text-center pb-3'>
                    Sign up
                    <span className=' text-indigo-200'> ChatApp</span>
                </h1>

                <form>
                    <div>
                        <label className='label p-2'>
                            <span className='text-base label-text'>Full name</span>
                        </label>
                        <input type='text' placeholder='Full name' className='w-full input input-bordered h-10' />
                    </div>


                    <div>
                        <label className='label p-2'>
                            <span className='text-base label-text'>User name</span>
                        </label>
                        <input type='text' placeholder='User name' className='w-full input input-bordered h-10' />
                    </div>

                    <div>
                        <label className='label p-2'>
                            <span className='text-base label-text'>Password</span>
                        </label>
                        <input type='text' placeholder='Enter password' className='w-full input input-bordered h-10' />
                    </div>


                    <div>
                        <label className='label p-2'>
                            <span className='text-base label-text'>Confirm password</span>
                        </label>
                        <input type='text' placeholder='Confirm password' className='w-full input input-bordered h-10' />
                    </div>


                    {/* Gender checkbox */}
                    <GenderCheckbox/>

                    <a href='#' className='text-sm text-gray-400 hover:underline hover:text-indigo-200 mt-2 flex px-2'>
                        Already have an account?
                    </a>
                    <div>
                        <button className='btn btn-block btn-sm mt-2'>
                            Sign Up
                        </button>
                    </div>
                </form>
            </div>

        </div>
    )
}

export default Signup