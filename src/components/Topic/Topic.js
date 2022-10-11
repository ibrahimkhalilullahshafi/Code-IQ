import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from '../Quiz/Quiz';
import './Topic.css'

const Topic = () => {
    const { data } = useLoaderData();
    const quizs = data;
    return (
        <section>
            <div className='description'>
                <div><img src={process.env.PUBLIC_URL + "coding.png"} alt="" /></div>
                <div><h2>Want to test your knowledge?</h2><p>Brush up on your coding knowledge with our quiz segment.Check out our online computer programming quizzes to enhance your knowledge, learn new things or prepare for an upcoming test. Made up of well-researched and interesting quiz questions, each and every quiz here can test your awareness and grasp of the subject.</p></div>
            </div>
            <div className='topic-container'>
                {
                    quizs.map(quiz => < Quiz
                        key={quiz.id}
                        quiz={quiz}
                    ></Quiz>)
                }
            </div ></section>


    );
};

export default Topic;