import React  from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import RoutLayout from './RoutLayout'
import HeroSection from './components/Hero.'
import About from './components/About'
import Packages from './components/Packages'
import Trainers from './components/Trainers'
import Contact from './components/Contact'
import Equipments from './components/Equipments'
import ForSell from './components/ForSell';
import Services from './components/Services';
import Dropdown from './components/Dropdown';
import { ThemeProvider } from './ThemeContex';

const route = createBrowserRouter([{
  path:'/',
  element:<RoutLayout/>,
  children:[
    {index:true, element:<HeroSection/>},
    {path:'/about', element:<About/>},
    {path:'/services', element:<Services/>},
    {path:'/packages', element:<Packages/>},
    {path:'/trainers', element:<Trainers/>},
    {path:'/contact', element:<Contact/>},
    {path:'/equipments', element:<Equipments/>},
    {path:'/forsell', element: <ForSell/>},
    {path:'/shop', element:<ForSell/>},
    {path:'/dropdown', element:<Dropdown/>},
  ]
}])
const App = () => {
   
  return (
        <ThemeProvider>
      <RouterProvider router={route}/>
      </ThemeProvider>
    
  )
}

export default App

