import { BiLogOut } from 'react-icons/bi'
import useLogout from '../../hooks/useLogout'

function LogoutButton() {

  const {logout} = useLogout();

  return (
    <div className='mt-auto ' onClick={logout}>
        <BiLogOut className='w-10 h-10 text-indigo-400 cursor-pointer rounded-full p-2 hover:bg-indigo-400 hover:text-white'/>
    </div>
  )
}

export default LogoutButton