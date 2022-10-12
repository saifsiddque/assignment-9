import React, { useState } from 'react';
import { BeakerIcon, EyeIcon } from '@heroicons/react/24/solid'

const Quizquestion = ({qui}) => {
    const [isActive, setIsActive] = useState(false);

    const handleClick = () => {
      setIsActive(current => !current);
  
    
    };
    return (
        <div>
            <div className="box border rounded-lg m-20 text-center pt-5 relative">
                <p className='text-2xl mx-16'>Question:{qui.question}</p>
                <EyeIcon onClick={handleClick} className="h-16 w-16 text-blue-500 absolute top-3 right-3"></EyeIcon>
                <p
                 style={{
                    display: isActive ? 'block' : 'none'
                  }}className='bg-blue-500 text-white p-3 font-bold mt-10'>Correct Answer Is : {qui.correctAnswer} </p>

                {/* {
                    qui.options.map(option=>(
                        <div className="mt-5 flex items-center pl-4 rounded border border-gray-200 dark:border-gray-700">
                            <input  type="radio"  name="bordered-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                            <label   className="py-4 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">{qui.options[0]}</label>
                        </div>
                    ))

                } */}
                <div className="mt-5 flex items-center pl-4 rounded border border-gray-200 dark:border-gray-700">
                    <input onClick={handleClick}  type="radio"  name="bordered-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                    <label   className="py-4 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">{qui.options[0]}</label>
                </div>
                <div className="mt-5 flex items-center pl-4 rounded border border-gray-200 dark:border-gray-700">
                    <input onClick={handleClick}  type="radio"  name="bordered-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                    <label   className="py-4 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">{qui.options[1]}</label>
                </div>
                <div className="mt-5 flex items-center pl-4 rounded border border-gray-200 dark:border-gray-700">
                    <input onClick={handleClick}  type="radio"  name="bordered-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                    <label   className="py-4 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">{qui.options[2]}</label>
                </div>
                
                <div className="mt-5 flex items-center pl-4 rounded border border-gray-200 dark:border-gray-700">
                    <input onClick={handleClick}  type="radio"  name="bordered-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                    <label   className="py-4 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">{qui.options[3]}</label>
                </div>
            </div>
        </div>
    );
};

export default Quizquestion;