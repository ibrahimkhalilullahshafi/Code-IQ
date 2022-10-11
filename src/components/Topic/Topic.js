import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from '../Quiz/Quiz';
import './Topic.css'

const Topic = () => {
    const { data } = useLoaderData();
    const quizs = data;
    return (
        <div className='topic-container'>
            {
                quizs.map(quiz => < Quiz
                    key={quiz.id}
                    quiz={quiz}
                ></Quiz>)
            }
        </div >
    );
};

export default Topic;