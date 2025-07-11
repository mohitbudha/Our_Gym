import React  from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import RoutLayout from './RoutLayout'
import HeroSection from './components/Hero.'
import About from './components/About'
import Packages from './components/Packages'
import Trainers from './components/Trainers'
import Contact from './components/Contact'
import Equipments from './components/Equipments'

const route = createBrowserRouter([{
  path:'/',
  element:<RoutLayout/>,
  children:[
    {index:true, element:<HeroSection/>},
    {path:'/about', element:<About/>},
    {path:'/packages', element:<Packages/>},
    {path:'/trainers', element:<Trainers/>},
    {path:'/contact', element:<Contact/>},
    {path:'/equipments', element:<Equipments/>}
  ]
}])
const App = () => {
   
  return (
      <div >
      <RouterProvider router={route}/>
    </div>
  )
}

export default App

