import React, { useState, useEffect } from 'react';
import { Form, Input, Button, Layout } from 'antd';
import { useLocation } from 'react-router-dom';
import useCandidateLogin from '../../hooks/useCandidateLogin';
import useAdminLogin from '../../hooks/useAdminLogin';
import 'antd/dist/antd.css';
import './login.scss';
const layout = {
    labelCol: {
        span: 5,
    },
    wrapperCol: {
        span: 16
    }
};

const Login = () => {
    const [candidateLogin, message] = useCandidateLogin();
    const [adminLogin, errMessage] = useAdminLogin();
    const location = useLocation();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(false);
        if(message !== 'successful' && message !== '') {
            setLoading(true);
            if(location.pathname === '/admin_login') {
                console.log(errMessage);
            } else {
                console.log(message);
            }
        }
    }, [message, errMessage, location.pathname]);

    const onFinish = (values) => {
        console.log('Success:', values.email); 
        setLoading(true)
        if(location.pathname === '/admin_login') {
            adminLogin(values);
        } else {
            candidateLogin(values);
        }
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <Layout className='login'>
             <Layout className="header-section">
                <h3 className="header-text">
                    {location.pathname === '/admin_login' ? 'Admin Login' : 'Candidate Login'}
                </h3>
            </Layout>
            <Form
                {...layout}
                name="basic"
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                className='form'
                >
                    <Form.Item
                        label="Email Id"
                        name="email"
                        rules={[
                        {
                            required: true,
                            message: 'Please enter your email id!'
                        },
                        {
                            type: 'email',
                            message: 'Email id is not in valid formate!'
                        }
                        ]}
                        className='input-area'
                    >
                        <Input className='input'/>
                    </Form.Item>
                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[
                        {
                            required: true,
                            message: 'Please enter your password!',
                        },
                        ]}
                        className='input-area'
                    >
                        <Input.Password/>
                    </Form.Item>
                    <Form.Item className='register-btn'>
                        <Button type="primary" htmlType="submit" className='button' loading={loading}>
                            Login
                        </Button>
                    </Form.Item>
                </Form>
            </Layout>

            
    );
};

export default Login;