import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quizquestion from './Quizquestion';

const Quiz = () => {
    const quiData = useLoaderData().data.questions
    console.log(quiData);
  
    return (
        <div>
           {quiData.map(qui => (
                <Quizquestion key={qui.id} qui={qui}></Quizquestion>
           ))}
        </div>
    );
};

export default Quiz;