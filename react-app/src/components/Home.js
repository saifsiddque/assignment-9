import React from 'react'
import { useLoaderData } from 'react-router-dom';
import Quizs from './Quizs';
// import Lottie from 'lottie-react'
// import reader from '../assets/reader.json'

const Home = () => {
  const quizData = useLoaderData().data
  console.log(quizData);
  return (
    <div className=''>
      <h1 className='text-4xl m-5 border-b-2'>Quiz MASTER</h1>
      <div className='grid gap-6 row-gap-5 mb-8 lg:grid-cols-4 sm:row-gap-6 sm:grid-cols-2 px-10'>
          {
            quizData.map(quiz=>(
              <Quizs key={quiz.id} quiz={quiz}></Quizs>
            ))
          }
      </div>

    </div>
  )
}

export default Home
