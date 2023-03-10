import React, { useState } from 'react';
import { BeakerIcon, EyeIcon } from '@heroicons/react/24/solid'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Quizquestion = ({qui}) => {
    const notify = (ans) =>{
    console.log(ans) 
    console.log(qui)

        if (ans.option === qui.correctAnswer) {
             toast( "You Are Right" );
          }
          else{
            toast("You Are Wrong");

          }
        
    } 
    const [isActive, setIsActive] = useState(false);
    const handleClick = () => {
      setIsActive(current => !current);
  
    
    };
    return (
        <div>
            <div className="box border rounded-lg m-20  text-center pt-5 relative ">
                <p className='text-2xl mx-2 mr-20'>Question:{qui.question}</p>
                <EyeIcon onClick={handleClick}  className="h-16 w-16 text-blue-500 absolute top-3 right-3"></EyeIcon>
                <ToastContainer />
                <p
                 style={{
                    display: isActive ? 'block' : 'none'
                  }}className='bg-blue-500 text-white p-3 font-bold mt-10'>Correct Answer Is : {qui.correctAnswer} </p>

                {
                    qui.options.map(option=>(
                        <div option={option.option} className="mt-5 flex items-center pl-4 rounded border border-gray-200 dark:border-gray-700">
                            <input onClick={() => notify({option})}  type="radio"  name="bordered-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                            <label   className="py-4 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">{option}</label>
                        </div>
                    ))

                }
                {/* <div className="mt-5 flex items-center pl-4 rounded border border-gray-200 dark:border-gray-700">
                    <input  onClick={() => notify(qui.options[0], 0)}  type="radio"  name="bordered-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
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
                </div> */}
            </div>
        </div>
    );
};

export default Quizquestion;