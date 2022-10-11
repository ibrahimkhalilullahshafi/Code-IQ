import React from 'react';
import './Quiz.css'

const Quiz = ({ quiz }) => {
    const { name, logo, total } = quiz;
    return (
        <div className='quiz-container'>
            <div >
                <img className='topic-image' src={logo} alt="" />
            </div>
            <div className='topic-info'>
                <p>Name: {name}</p>
                <p>Number of Quiz: {total}</p>
                <button>Start Quiz</button>
            </div>
        </div>
    );
};

export default Quiz;