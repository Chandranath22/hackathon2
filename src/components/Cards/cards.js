import React from 'react';
import { Layout, Divider, Card, Typography, Progress } from 'antd';
import 'antd/dist/antd.css';
import './card.scss';

const Cards = ({ name }) => {
    const { Text } = Typography;
    return (
        <Layout className='admin'>
            <Divider/>
            <Card title={name}
                extra={<a href="/questions/mysql">More Detail</a>}
                style={{ width: '90%' }}
                className='cards'
            >
                <Layout className='progress'>
                    <Layout className='text'>
                        <Text strong>AWS</Text>
                    </Layout>
                    <Layout className='bar'>
                        <Progress percent={20} status="active"/>
                    </Layout>      
                </Layout>
                <Divider className='divide'/>
                <Layout className='progress'>
                    <Layout className='text'>
                            <Text strong>Python</Text>
                    </Layout>
                    <Layout className='bar'>
                        <Progress percent={0} status="active"/>
                    </Layout>
                </Layout>
                <Divider className='divide'/>
                <Layout className='progress'>
                    <Layout className='text'>
                        <Text strong>MySQL</Text>
                    </Layout>
                    <Layout className='bar'>
                        <Progress percent={70} status="active"/>
                    </Layout>
                </Layout>
            </Card>
        </Layout>
    );
};

export default Cards;