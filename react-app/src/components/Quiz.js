import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Quiz = () => {
    const quizData= useLoaderData()
    console.log(quizData)

    return (
        <div>
            saff
        </div>
    );
};

export default Quiz;