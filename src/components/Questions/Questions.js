import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Questions = () => {
    const question = useLoaderData();
    console.log(question)
    return (
        <div>
            <h1>dsjfhajh</h1>

        </div>
    );
};

export default Questions;