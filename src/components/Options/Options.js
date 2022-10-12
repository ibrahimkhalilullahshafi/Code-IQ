import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Options = ({ correctAnswer, option }) => {
    const notify = (correctAnswer, option) => (option === correctAnswer ? toast.error("You have today's workout..") : toast.error("asid"));

    // console.log(correctAnswer);
    // console.log(option);

    return (
        <div>
            <input onClick={notify} type="radio" value={option} name="option" />{option}
            <ToastContainer />


        </div>
    );
};

export default Options;