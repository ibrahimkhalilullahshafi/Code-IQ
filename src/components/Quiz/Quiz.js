import React from 'react';
import { Link } from 'react-router-dom';
import './Quiz.css'

const Quiz = ({ quiz }) => {
    const { id, name, logo, total } = quiz;
    return (
        <div className='quiz-container'>
            <div >
                <img className='topic-image' src={logo} alt="" />
            </div>
            <div className='topic-info'>
                <p>Name: {name}</p>
                <p>Number of Quiz: {total}</p>
                <Link to={`/${id}`}><button >Start Quiz</button></Link>
            </div>
        </div>
    );
};

export default Quiz;