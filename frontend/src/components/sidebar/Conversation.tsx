import { generateAvatarFromName } from '../../utils/generateAvatarFromName'
import { User } from '../../types/dbTypes'
import useConversation from '../../zustand/useConversation';
import { useSocketContext } from '../../context/Socket';

type ConversationProps = {
    user: User,
    isLast: boolean;
}


function Conversation({user, isLast}: ConversationProps) {
  const {selectedConversation, setSelectedConversation} = useConversation();

  const {onlineUsers} = useSocketContext()

  const isOnline = onlineUsers.includes(user._id);
  const isSelected = selectedConversation?._id === user._id;
  return (
    <>
    <div 
    onClick={() => setSelectedConversation(user)}
    className={`flex gap-2 items-center hover:bg-indigo-400 rounded p-2 py-1 cursor-pointer ${isSelected ? 'bg-indigo-400' : ''}`}>
        <div className={`avatar ${isOnline ? 'online' : ''}`}>
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