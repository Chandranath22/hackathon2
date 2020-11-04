import React from 'react';
import 'antd/dist/antd.css';
import QuestionLayout from '../../components/ProblemLayout/questionLayout';

const AWS = () => {
    const questionsArray = [
        {
            number : 1,
            question : "Create a Lambda function as a target for the CloudWatch Event Rule. This lambda function will do the following operations:",
            step1: "1: Reads instance details from CloudWatch Event.",
            step2: "2: Creates a new record in DynamoDB table if record doesn't exist in DynamoDB for that instance.",
            step3: "3: If record already exists for the instance in DDB, then updates that record with the current instance state.",
            step4: "4: Sample dynamodb record format:",
            details: [
                "{",
                    "instance_id: i-123123132123,",
                    "instance_launch_time: 2012-12-21 12:21:12,",
                    "instance_current_state: pending",
                "}"
            ],
            step5: "5: Sends a SNS notification every time a new instance is launched."
        } , 
        {
            number : 2,
            question : "Create a CloudFormation template having the following resources:",
            step1: "1: CloudFormation Custom Resource - which does the following operations.",
            step2: "2: Accepts VPC Id as parameter.",
            step3: "3: If VPC with above VPC Id exists in that region, then sends SUCCESS response and the cidr Ip range of the VPC in the response body to CloudFormation.",
            step4: "4: Sample dynamodb record format:",
            step5: "5: If VPC with above VPC Id does not exist in that region, then sends FAILED response to CloudFormation."
        } , 
        {
            number : 3,
            question : "1: Create a Lambda function as a target for the CloudWatch Event Rule. This lambda function will do the following operations:",
            step1: "2: Reads instance details from CloudWatch Event.",
            step2: "3: Creates a new record in DynamoDB table if record doesn't exist in DynamoDB for that instance.",
            step3: "4: If record already exists for the instance in DDB, then updates that record with the current instance state.",
            step4: "5: Sample dynamodb record format:",
            details: [
                "{",
                    "instance_id: i-123123132123,",
                    "instance_launch_time: 2012-12-21 12:21:12,",
                    "instance_current_state: pending",
                "}"
            ],
            step5: "6: Sends a SNS notification every time a new instance is launched."
        }, 
        {
            number : 4,
            question : "1: Create a Lambda function as a target for the CloudWatch Event Rule. This lambda function will do the following operations:",
            step1: "2: Reads instance details from CloudWatch Event.",
            step2: "3: Creates a new record in DynamoDB table if record doesn't exist in DynamoDB for that instance.",
            step3: "4: If record already exists for the instance in DDB, then updates that record with the current instance state.",
            step4: "5: Sample dynamodb record format:",
            details: [
                "{",
                    "instance_id: i-123123132123,",
                    "instance_launch_time: 2012-12-21 12:21:12,",
                    "instance_current_state: pending",
                "}"
            ],
            step5: "6: Sends a SNS notification every time a new instance is launched."
        }, 
        {
            number : 5,
            question : "1: Create a Lambda function as a target for the CloudWatch Event Rule. This lambda function will do the following operations:",
            step1: "2: Reads instance details from CloudWatch Event.",
            step2: "3: Creates a new record in DynamoDB table if record doesn't exist in DynamoDB for that instance.",
            step3: "4: If record already exists for the instance in DDB, then updates that record with the current instance state.",
            step4: "5: Sample dynamodb record format:",
            details: [
                "{",
                    "instance_id: i-123123132123,",
                    "instance_launch_time: 2012-12-21 12:21:12,",
                    "instance_current_state: pending",
                "}"
            ],
            step5: "6: Sends a SNS notification every time a new instance is launched."
        }
    ];
    return (
        <QuestionLayout questions={questionsArray} test={'AWS'}/>
    );
}

export default AWS;