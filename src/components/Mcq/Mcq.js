import parse from "html-react-parser";
import React from 'react';
import Options from "../Options/Options";
import { FaEye } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';

const Mcq = ({ ques }) => {
    const { options, question, correctAnswer } = ques;
    const notify = (correctAnswer) => toast.error("your correct answer is", { position: "top-center", theme: "light" })
    console.log(correctAnswer)
    return (
        <div>
            <div><h3>Question:{parse(question)}</h3></div>
            {
                options.map(option => <Options
                    key={Math.random()}
                    correctAnswer={correctAnswer}
                    option={option}>
                </Options>)
            }
            <button onClick={notify}><FaEye /> </button>
            <ToastContainer />

        </div>

    );
};

export default Mcq;