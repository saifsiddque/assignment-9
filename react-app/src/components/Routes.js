import { createBrowserRouter,  Routes } from 'react-router-dom'
import ErrorPage from './ErrorPage'
import Root from './Root'
import Home from './Home'
import About from './About'
import Books from './Books'
import BookDetails from './BookDetails'


const router = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    // children:[
    //   {
    //     path: '/',
    //     element: <Home></Home>,
    //   },
    //   {
    //     path: '/home',
    //     element: <Home></Home>,
    //   },
    //   {
    //     path: 'about',
    //     element: <About></About>
    
    //   },
    //   {
    //     path: 'books',
    //     element: <Books></Books>,
    //     loader: () =>{
    //         return fetch('https://api.itbook.store/1.0/new')
    //     },
    
    //   },
    //   {
    //     path: 'book:id',
    //     element: <BookDetails></BookDetails> ,
    //     loader: ({params}) =>{
    //         return fetch(`https://api.itbook.store/1.0/books/${params.id}`)
    //     },
    //   },
    // ]
  },

])
export default router