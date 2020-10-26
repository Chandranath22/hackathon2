import React, { useState } from 'react';
import { 
    Layout,
    Row,
    Col,
    Typography,
    Button,
    Divider,
    Input,
    Image
} from 'antd';
import 'antd/dist/antd.css';
import './questionLayout.scss';

import useAnswerSubmit from '../../hooks/useAnswerSubmit';

const QuestionLayout = ({ questions }) => {
    const [answer, setAnswer] = useState('');
    const [number, setNumber] = useState(0);
    const [answersArray, setAnswersArray] = useState([]);
    const [answerSubmit] = useAnswerSubmit();
    const email = sessionStorage.getItem('email');
    const length = questions.length;
    const { Title, Paragraph } = Typography;
    const { TextArea } = Input;

    const onPressNext = () => {
        if(number !== length - 1){
            setNumber(number + 1);
            setAnswer('');
        } else if(number === length - 1) {
            console.log('finished');
            const data = {
                email,
                test: 'MYSQL',
                answersArray
            }
            answerSubmit(data);
        }
    };

    const onPressPrev = () => {
        if(number !== 0){
            setNumber(number - 1);
        }
    };

    const onPressHome = () => {
        window.location.href = '/home';
    }

    const onPressSubmit = () => {
        const tempArray = answersArray;
        const input = {'number': number+1, 'question': questions[number].question, 'answer': answer}
        if(tempArray[number]){
            tempArray[number] = input;
        } else {
            tempArray.push(input);
            setAnswersArray(tempArray);
        }
    }

    return (
        <Layout className='mysql'>
            <Row className='problem-layout'>
                <Col className='question-layout' span={12}>
                    <Typography className='question'>
                        <Title level={3}>Question No. {number + 1}</Title>
                        <Paragraph strong>
                            <blockquote>
                                {questions[number].question}
                            </blockquote>
                        </Paragraph>
                    </Typography>
                    <Layout className='image'>
                        <Image
                            src={require('../../assets/images/northwind-er-relationship.png')}
                            alt="er-diagram"
                            className="er-image"
                        />
                    </Layout>
                    <Layout className='button-layout'>
                        <Button type="primary" className='button' onClick={onPressHome}>
                            Home
                        </Button>
                        <Button type="primary" className='button' onClick={onPressPrev}>
                            Prev
                        </Button>
                        <Button type="primary" className='button' onClick={onPressNext}>
                            {number !== length - 1 ? 'Next' : 'Finish'}
                        </Button>
                    </Layout>
                </Col>
                <Divider type="vertical" style={{height: '100%'}}/>
                <Col className='input-answer' span={12}>
                    <Layout className='input-area'>
                        <TextArea
                            autoSize={{ minRows: 25, maxRows: 6 }}
                            value={answer}
                            onChange={(e) => setAnswer(e.target.value)}
                        />
                    </Layout>
                    <Layout className='button-layout'>
                        <Button type="primary" onClick={onPressSubmit}>Submit</Button>
                        <Button type="primary" className='button' onClick={() => setAnswer('')}>Reset</Button>
                    </Layout>
                </Col>
            </Row>
        </Layout>
    );
}

export default QuestionLayout;