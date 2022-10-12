import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Mcq from '../Mcq/Mcq';

const Questions = () => {
    const { data } = useLoaderData();
    const question = data;
    // console.log(question);
    const { name, questions } = question;

    // console.log(id)
    // console.log(name)
    // console.log(data)
    return (
        <div>
            <h1>Quiz of {name}</h1>
            {
                questions.map(ques => <Mcq
                    key={ques.id}
                    ques={ques}
                ></Mcq>)
            }

        </div>
    );
};

export default Questions;