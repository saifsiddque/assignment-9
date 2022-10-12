import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Statistics = () => {
    const quizData = useLoaderData().data
    return (
        <div>
            <h1 className='text-4xl m-5 border-b-2'>Total Questions</h1>
            {
                quizData.map(quiz=>(
                    <p className='border text-2xl m-5 p-3 mx-16 shadow-md'>
                        {quiz.name}
                        <span className='text-right text-2xl float-right text-blue-700'>{quiz.total}</span>
                    </p>
                ))
            }
        </div>
    );
};

export default Statistics;