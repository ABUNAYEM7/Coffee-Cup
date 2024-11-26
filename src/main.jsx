import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayout from './MainLayout/MainLayout';
import Home from './Pages/Home';
import CoffeeDetails from './Pages/CoffeeDetails';
import CoffeeEdit from './Pages/CoffeeEdit';
import AddCoffee from './Pages/AddCoffee';
import ErrorPage from './Pages/ErrorPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout/>,
    errorElement:<ErrorPage/>,
    children:[
      {
        path :'/',
        element : <Home/>
      },
      {
        path :'CoffeeDetails/:id',
        element :<CoffeeDetails/>,
        loader : async({params})=>{
          const res = await fetch(`http://localhost:5000/coffees/${params.id}`)
          if(!res.ok){
            throw new Error('Failed to fetch data')
          }
          return res.json()
        }
      },
      {
        path :'CoffeeEdit/:id',
        element : <CoffeeEdit/>,
        loader : async({params})=>{
          const res = await fetch(`http://localhost:5000/coffees/${params.id}`)
          if(!res.ok){
            throw new Error('Failed to fetch data')
          }
          return res.json()
        }
      },
      {
        path :'AddCoffee',
        element : <AddCoffee/>
      },
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <RouterProvider router={router} />
</StrictMode>
)
