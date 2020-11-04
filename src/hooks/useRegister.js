import { useState } from "react";
import axios from 'axios';
import { notification } from 'antd';

export default () => {
    const[message, setMessage] = useState('');

    const successRegister = () => {
        window.location.href = '/candidate_login';
    }

    const register = async (data) => {
        try {
            const response = await axios.post('http://localhost:9000/api/register', data);
            console.log(response);
            if (response.data.message === 'User Added Successfully') {
                console.log('Response Message: ', response.data.message);
                setMessage('success');
                notification['success']({
                    key: 'notification',
                    message: 'Register Successful',
                    description: 'You have been registered successfully',
                    duration: 3,
                    placement: 'topRight',
                    style: {
                        width: 380,
                        height: 100,
                        backgroundColor: '#F6FFED',
                        border: 'solid 1px #B7EB8F',
                        color: 'black'
                    },
                    onClose: successRegister
                });
            } else {
                setMessage(response.data.message);
            }
        }
        catch(e) {
            setMessage('Something went wrong');
            console.log(e);
        }
    }
    return [register, message];
};