import { generateAvatarFromName } from '../../utils/generateAvatarFromName'
import { User } from '../../types/dbTypes'

type ConversationProps = {
    user: User,
    isLast: boolean;
}


function Conversation({user, isLast}: ConversationProps) {
  return (
    <>
    <div className='flex gap-2 items-center hover:bg-indigo-300 rounded p-2 py-1 cursor-pointer'>
        <div className='avatar online'>
            <div className='w-12 rounded-full'>
                <img src={generateAvatarFromName(user.fullName)} />
            </div>
        </div>

        <div className='flex flex-col flex-1'>
            <div className='flex gap-3 justify-between'>
                <p className='font-bold text-gray-200'>{user.fullName}</p>
                <span className='text-xl'>😀</span>
            </div>

        </div>
    </div>
   {!isLast && <div className='divider my-0 py-0 h-1'/>}
    </>
  )
}

export default Conversation