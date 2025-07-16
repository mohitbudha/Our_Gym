import React,{useState}from 'react'
import { NavLink } from 'react-router-dom';

const Dropdown = () => {
    const[Dropdown, setDropdown]= useState(false);

  return (
    <nav id="dropdown" className='mx-60 my-40'>
        <div>
            <ul className='flex flex-row gap-6 '>
                <li><NavLink to="/" >Home</NavLink></li>
          <li><NavLink to="/" >About</NavLink></li>
          <div className='relative'>
           <li
           onMouseEnter={()=> setDropdown(true)}
           onMouseLeave={()=> setDropdown(false)}
           ><NavLink to='' >Programs</NavLink></li>
           {Dropdown &&(
            <ul>
                <li>
                    <NavLink to=''>DIT</NavLink>
                </li>
                <li>
                    <NavLink to=''>DAS</NavLink>
                </li>
                <li>
                    <NavLink to=''>DPS</NavLink>
                </li>
            </ul>
           )}
          </div>
            </ul>
        </div>
      
    </nav>
  )
}

export default Dropdown
