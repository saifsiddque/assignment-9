import { createBrowserRouter,  Routes } from 'react-router-dom'
import ErrorPage from './ErrorPage'
import Root from './Root'
import Home from './Home'
import About from './About'
import Books from './Books'
import BookDetails from './BookDetails'
import Statistics from './Statistics'
import Blogs from './Blogs'
import Quiz from './Quiz'


const router = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path: '/',
        element: <Home></Home>,
        loader:() =>{
          return fetch('https://openapi.programming-hero.com/api/quiz')
        }
      },
      {
        path: '/home',
        element: <Home></Home>,
        loader:() =>{
          return fetch('https://openapi.programming-hero.com/api/quiz')
        }

      },
    
      {
        path: '/about',
        element: <About></About>
    
      },
      {
        path: 'statistics',
        element: <Statistics></Statistics>,
        loader:() =>{
          return fetch('https://openapi.programming-hero.com/api/quiz')
        }
    
      },
      {
        path: 'blogs',
        element: <Blogs></Blogs>
    
      },
      {
        path: 'books',
        element: <Books></Books>,
      },
      // {
      //   path: 'book:id',
      //   element: <BookDetails></BookDetails> ,
      //   loader: ({params}) =>{
      //       return fetch(`https://api.itbook.store/1.0/books/${params.id}`)
      //   },
      // },
      {
        path: 'quiz:id',
        element: <Quiz></Quiz>,
        loader:({params}) =>{
          return fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`)
        }
    

      },
    ]
  },

])
export default router