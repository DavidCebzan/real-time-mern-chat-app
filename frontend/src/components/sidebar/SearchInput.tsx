import React, { useState } from 'react'
import { IoSearchSharp } from 'react-icons/io5'
import useConversation from '../../zustand/useConversation';
import { useGetConversations } from '../../hooks/useGetConversations';
import toast from 'react-hot-toast';

function SearchInput() {

  const [search, setSearch] = useState('');
  const {setSelectedConversation} = useConversation();
  const {converations} = useGetConversations();

  const handleSubmit = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if(!search) return;
    if(search.length < 3) {
      return toast.error('Search term must be at least 3 characters long');
    }

    const conversation = converations.find((c) => c.fullName.toLowerCase().includes(search.toLowerCase()));

    if(conversation) {
      setSelectedConversation(conversation);
      setSearch('')
    } else {
      toast.error('No such user found');
    }
  }

  return (
   <form className='flex items-center gap-2 m-2'>
    <input onChange={(e) => setSearch(e.target.value)} value={search} type='text' placeholder='Search...' className='input input-bordered rounded-full'/>
    <button type='submit' onSubmit={handleSubmit} className='btn btn-circle bg-indigo-300 text-white'>
        <IoSearchSharp className='w-6 h-6 outline-none'/>
    </button>
   </form>
  )
}

export default SearchInput