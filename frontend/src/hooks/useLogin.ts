import { useState } from 'react'
import toast from 'react-hot-toast';
import { useAuthContext } from '../context/AuthContext';

export const useLogin = () => {
    const [loading, setLoading] = useState(false);
    const { setAuthUser } = useAuthContext();

    const login = async (username: string, password: string) => {
       const succes = handleInputErrors(username, password);
       if(!succes) return;
       
        setLoading(true);
        try {
            const res = await fetch('/api/auth/login', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({ username, password }),
            });

            const data = await res.json();

            if (data.error) {
                throw new Error(data.error);
            }

            //localstorage
            localStorage.setItem('chat-user', JSON.stringify(data));
            //cotext
            setAuthUser(data);

        } catch (error) {
            toast.error((error as Error).message);
        } finally {
            setLoading(false);
        }
    }

    return { loading, login };
}


function handleInputErrors(username: string, password: string) {
    if(!username || !password) {
        toast.error('Please fill al the fields');

        return false;
    }

    return true;
}
