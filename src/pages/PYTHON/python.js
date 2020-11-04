import React from 'react';
import 'antd/dist/antd.css';
import QuestionLayout from '../../components/ProblemLayout/questionLayout';

const Python = () => {
    const questionsArray = [
        {
            number : 1,
            question : ["Define a class Person and its two child classes: Male and Female. All classes have a",
                        "method \"get_gender\" which can print \"Male\" for Male class and \"Female\" for Female",
                        "Class."
            ],
            step1: ["Bonus: Make class Person an abstract class and make get_gender an abstract method",
                "in the same class. The two child classes must inherit and implement get_gender." ,
                "i.,e, When trying to initialize an object of class Person, the program must throw error."
            ],
            step2:[
                "Hint: ",
                "Use abc library (comes natively with Python3) https://www.python-course.eu/python3_abstract_classes.php"
            ]
            
        } , 
        {
            number : 2,
            question : ["With a given list [12,24,35,24,88,120,155,88,120,155], ",
                        "write a program to print this list after removing all",
                        "duplicate values with original order reserved"
            ],
            step1:[
                "Hint: ",
                "Use set() to store a number of values without duplicates."
            ]
        } , 
        {
            number : 3,
            question : "Write a program to generate a 3*5*8 3D array whose each element is 0."
        }, 
        {
            number : 4,
            question : "Rest API:",
            step1: "Northwind dataset",
            step2:"1. Insert, update and select on customers",
            step3:"2. Insert, update and select on products",
            step4:"3. Insert, update and select on orders",
            step5:"4. Order history of given customer",
        }, 
        {
            number : 5,
            question : ["Define a class Person and its two child classes: Male and Female. All classes have a",
                        "method \"get_gender\" which can print \"Male\" for Male class and \"Female\" for Female",
                        "Class."
            ],
            step1: ["Bonus: Make class Person an abstract class and make get_gender an abstract method",
                "in the same class. The two child classes must inherit and implement get_gender." ,
                "i.,e, When trying to initialize an object of class Person, the program must throw error."
            ],
            step2:[
                "Hint: ",
                "Use abc library (comes natively with Python3) https://www.python-course.eu/python3_abstract_classes.php"
            ]
        }
    ];
    return (
        <QuestionLayout questions={questionsArray} test={'PYTHON'}/>
    );
}

export default Python;