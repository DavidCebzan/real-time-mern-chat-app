import { useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import { User } from '../types/dbTypes';

export const useGetConversations = () => {
    const [loading, setLoading] = useState(false);
    const [converations, setConversation] = useState<User[]>([]);

    useEffect(() => {
        const getConversationg = async () => {
            setLoading(true);
            
            try {
            const res = await fetch('/api/users');

            const data = await res.json();

            if(data.error) {
                throw new Error(data.error);
            }
            setConversation(data);

            } catch (error) {
                toast.error((error as Error).message);
            } finally {
                setLoading(false);
            }
        }

         getConversationg()
    }, [])


    return {loading, converations}
}
