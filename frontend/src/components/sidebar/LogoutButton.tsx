import React from 'react'
import { BiLogOut } from 'react-icons/bi'

function LogoutButton() {
  return (
    <div className='mt-auto '>
        <BiLogOut className='w-10 h-10 text-indigo-400 cursor-pointer rounded-full p-2 hover:bg-indigo-400 hover:text-white'/>
    </div>
  )
}

export default LogoutButton