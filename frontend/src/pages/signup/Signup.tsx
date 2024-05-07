import { FormEvent, useState } from 'react'
import GenderCheckbox from './GenderCheckbox'
import { Link } from 'react-router-dom'
import useSignup from '../../hooks/useSignup'

export type SignUpState = {
        fullName: string,
        username: string,
        password: string,
        confirmPassword: string,
        gender: string
}

function Signup() {

    const [inputs, setInputs] = useState<SignUpState>({
        fullName: '',
        username: '',
        password: '',
        confirmPassword: '',
        gender: ''
    });

    const {loading, signup} = useSignup();

    const handleCheckboxChange = (gender: 'male' | 'female') => {
        setInputs((prev) => ({...prev, gender}))
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
            e.preventDefault();

            signup(inputs);
    }

    return (
        <div className=' flex flex-col items-center justify-center min-w-96 mx-auto'>

            <div className='w-full p-6 rounded-lg shadow-2xl bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
                <h1 className=' text-3xl font-semibold text-center pb-3'>
                    Sign up
                    <span className=' text-indigo-200'> ChatApp</span>
                </h1>

                <form onSubmit={handleSubmit}>
                    <div>
                        <label className='label p-2'>
                            <span className='text-base label-text'>Full name</span>
                        </label>
                        <input
                            value={inputs.fullName}
                            onChange={(e) => setInputs((prev) => ({ ...prev, fullName: e.target.value }))}
                            type='text'
                            placeholder='Full name'
                            className='w-full input input-bordered h-10'
                        />
                    </div>


                    <div>
                        <label className='label p-2'>
                            <span className='text-base label-text'>User name</span>
                        </label>
                        <input
                            value={inputs.username}
                            onChange={(e) => setInputs((prev) => ({ ...prev, username: e.target.value }))}
                            type='text'
                            placeholder='User name'
                            className='w-full input input-bordered h-10'
                        />
                    </div>

                    <div>
                        <label className='label p-2'>
                            <span className='text-base label-text'>Password</span>
                        </label>
                        <input
                            value={inputs.password}
                            onChange={(e) => setInputs((prev) => ({ ...prev, password: e.target.value }))}
                            type='password'
                            placeholder='Enter password'
                            className='w-full input input-bordered h-10'
                        />
                    </div>


                    <div>
                        <label className='label p-2'>
                            <span className='text-base label-text'>Confirm password</span>
                        </label>
                        <input
                            value={inputs.confirmPassword}
                            onChange={(e) => setInputs((prev) => ({ ...prev, confirmPassword: e.target.value }))}
                            type='password'
                            placeholder='Confirm password'
                            className='w-full input input-bordered h-10'
                        />
                    </div>


                    {/* Gender checkbox */}
                    <GenderCheckbox onCheckboxChange={handleCheckboxChange} selectedGender={inputs.gender}/>

                    <Link to='/login' className='text-sm text-gray-400 hover:underline hover:text-indigo-200 mt-2 flex px-2'>
                        Already have an account?
                    </Link>
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