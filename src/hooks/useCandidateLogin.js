import { useState } from "react";
import axios from 'axios';

export default () => {
    const[message, setMessage] = useState('');

    const candidateLogin = async (data) => {
        try {
            const response = await axios.post('http://localhost:9000/api/login', data);
            if(response.data.message === 'successful') {
                console.log('Response Message: ', response.data.message);
                sessionStorage.setItem('email', data.email);
                sessionStorage.setItem('isLoggedIn', true);
                window.location.href = '/home';
                setMessage(response.data.message);
            } else {
                setMessage('Something went wrong');
            }
        }
        catch(e) {
            setMessage('Something went wrong');
            console.log(e);
        }
    }
    return [candidateLogin, message];
};