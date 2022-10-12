import React from 'react';
import { Link } from 'react-router-dom';

const Quizs = ({quiz}) => {
    
    return (
        <div>
            <div className="box border p-5 bg-gray-200">
                <img className='mb-5'  src={quiz.logo} alt="" />
                <p>{quiz.name}</p>
                <Link to={`../home/${quiz.id}`} className='border p-2 rounded-md bg-blue-700 text-white flex  w-full'>Start Quiz</Link>
            </div>
        </div>
    );
};

export default Quizs;