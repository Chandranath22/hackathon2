import { useState } from "react";
import axios from 'axios';

export default () => {
    const[message, setMessage] = useState('');

    const answerSubmit = async (data) => {
        try {
            const response = await axios.post('http://localhost:9000/api/submitAnswer', data);
            console.log(response);
            if(response.data.message === 'Submitted successfully'){
                window.location.href = '/home';
            } else {
                setMessage('Something went wrong');
            }
        }
        catch(e) {
            setMessage('Something went wrong');
            console.log(e);
        }
    }
    return [answerSubmit, message];
};