import { useState } from 'react';
import axios from 'axios';

export default () => {
    const[errMessage, setMessage] = useState('');

    const adminLogin = async (data) => {
        try {
            const response = await axios.post('http://localhost:9000/api/admin_login', data);
            if(response.data.message === 'successful') {
                window.location.href = '/admin_home';
                setMessage(response.data.message);
                sessionStorage.setItem('email', data.email);
                sessionStorage.setItem('isLoggedIn', true);
                sessionStorage.setItem('isAdmin', true);
            } else {
                setMessage(response.data.message);
            }
        }
        catch(e) {
            setMessage('Something went wrong');
            console.log(e);
        }
    }
    return [adminLogin, errMessage];
}