import React, { useState, useEffect } from 'react';
import { Form, Input, Button, Layout, notification } from 'antd';
import { useLocation } from 'react-router-dom';
import useRegister from '../../hooks/useRegister';
import 'antd/dist/antd.css';
import './register.scss';
const layout = {
    labelCol: {
        span: 5,
    },
    wrapperCol: {
        span: 16
    }
};

const Register = () => {
    const [register, message] = useRegister();
    const [loading, setLoading] = useState(false);
    const location = useLocation();

    useEffect(() => {
        setLoading(false);
        if (message !== 'success' && message !== '') {
            notification['error']({
                key: 'error',
                message: 'Register Failed',
                description: `Register Attempt Failed. ${message}`,
                duration: 5,
                placement: 'topRight',
                style: {
                    width: 380,
                    height: 100,
                    backgroundColor: '#FFF2F0',
                    border: 'solid 1px #FFCCC7',
                    color: 'black'
                },
            });
        }
    }, [message, location.pathname]);


    const onFinish = async (values) => {
        setLoading(true)
        console.log('Success:', values);
        register(values);
    };


    const onFinishFailed = (errorInfo) => {
        notification['warning']({
            key: 'warning',
            message: 'Some error occurred',
            description: 'Something went wrong!',
            duration: 3,
            placement: 'topRight',
            style: {
                width: 380,
                height: 100,
                backgroundColor: '#FFFBE6',
                border: 'solid 1px #FFE58F',
                color: 'black'
            },
        });
        console.log('Failed:', errorInfo);
    };


    return (
        <Layout className='form-layout'>
             <Layout className="header-section">
                <h3 className="header-text">Register</h3>
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
                        label="Name"
                        name="name"
                        rules={[
                        {
                            required: true,
                            message: 'Please input your Name!',
                        },
                        ]}
                        className='input-area'
                    >
                        <Input className='input'/>
                    </Form.Item>
                    <Form.Item
                        label="Email Id"
                        name="email"
                        rules={[
                        {
                            required: true,
                            message: 'Please input your email id!',
                        },
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
                            message: 'Please input your password!',
                        },
                        ]}
                        className='input-area'
                    >
                        <Input.Password />
                    </Form.Item>
                    <Form.Item className='register-btn'>
                        <Button type="primary" htmlType="submit" className='button' loading={loading}>
                            Register
                        </Button>
                    </Form.Item>
                </Form>
            </Layout>

            
    );
};

export default Register;