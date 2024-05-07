import { useState } from 'react'
import { SignUpState } from '../pages/signup/Signup';
import toast from 'react-hot-toast';

const useSignup = () => {
 
    const [loading, setLoading] = useState(false);

    const signup = async ({fullName, username, password, confirmPassword, gender}: SignUpState) => {
        const succes = handleInputErrors({fullName, username, password, confirmPassword, gender});

        if(!succes) return;
        setLoading(true);
        try {
            const res = await fetch('api/auth/signup', {
                method: 'POST',
                headers: {'Content-type': 'application/json'},
                body: JSON.stringify({fullName, username, password, confirmPassword, gender})
            });

            const data = await res.json();

            console.log(data);
        } catch (error) {
            toast.error(error as string);
        } finally {
            setLoading(false);
        }
    }


    return {loading, signup}

}

export default useSignup

function handleInputErrors({fullName, username, password, confirmPassword, gender}: SignUpState) {
    if(!fullName || !username || !password || !confirmPassword || !gender) {
        toast.error('Please fill al the fields');

        return false;
    }

    if(password !== confirmPassword) {
        toast.error('Passwords do not match');
        return false
    }

    if(password.length < 6) {
        toast.error('Password must be at least 6 characters');
        return false;
    }

    return true;
}