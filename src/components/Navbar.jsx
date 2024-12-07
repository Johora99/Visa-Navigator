
import { Link, NavLink } from 'react-router-dom'
import logo from '../assets/icons8-world-50.png'
import { useContext } from 'react'
import { AuthContext } from '../AuthProvider/AuthProvider'
import { ThemeContext } from '../Pages/ThemeProvider';

import { Tooltip as ReactTooltip } from 'react-tooltip';


export default function Navbar() {
  const {user,signOutUser } = useContext(AuthContext);
  const {toggleTheme} = useContext(ThemeContext)
  return (
    <div className="w-full">
      <div>
       <nav className="container w-11/12 mx-auto">
           <div className="navbar lg:py-5">
  <div className="navbar-start">
    
    <div className='flex items-center gap-2'>
      <img src={logo} alt="" className='w-10 lg:w-auto'/>
      <h3 className='text-xl lg:text-4xl font-semibold'>Swift<span className='text-Tangerine'>Visa</span></h3>
    </div>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 gap-6 *:text-lg *:font-medium">
        <NavLink to='/'><a>Home</a></NavLink>
        <NavLink to='/allVisa'><a>All visas</a></NavLink>
        <NavLink to='/addVisa'><a>Add Visa</a></NavLink>
        <NavLink to='/myAddedVisa'><a>My added visas</a></NavLink>
        <NavLink to='/myAppliedVisa'><a>My Visa applications</a></NavLink>
    </ul>
    
  </div>
  <div className="navbar-end">
    <div className='hidden lg:block'>
    <div className='flex items-center gap-3'>
            {
              user ? <Link onClick={signOutUser} to='/' className='text-white text-lg lg:text-xl font-semibold bg-Tangerine py-2 px-8'>Log Out</Link> : <Link to='/logIn' className='text-white text-lg lg:text-xl font-semibold bg-Tangerine py-2 px-8'>Log In</Link>
            }
            {user ? (
        <>
          <img
            src={user?.photoURL}
            alt="User"
            className="w-12 h-12 rounded-full cursor-pointer"
            data-tooltip-id="profile-tooltip"
            data-tooltip-content={user?.displayName}
          />
          <ReactTooltip id="profile-tooltip" place="left-end" effect="solid" />
        </>
      ) : (
        <Link
          to="/register"
          className="text-white text-lg lg:text-xl font-semibold bg-Tangerine py-2 px-5"
        >
          Register
        </Link>
      )}

             <label className="swap swap-rotate">

  <input type="checkbox" hidden onClick={toggleTheme}/>


  <svg
    className="swap-on h-10 w-10 fill-current"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24">
    <path
      d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
  </svg>


  <svg
    className="swap-off h-10 w-10 fill-current"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24">
    <path
      d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
  </svg>
</label>
           
    </div>
    </div>
    <div className="dropdown ">
      <div className='flex items-center gap-2'>

      <div tabIndex={0} role="button" className="btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
        <label className="swap swap-rotate lg:hidden">

  <input type="checkbox" hidden onClick={toggleTheme}/>


  <svg
    className="swap-on h-6 w-6 fill-current"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24">
    <path
      d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
  </svg>


  <svg
    className="swap-off h-6 w-6 fill-current"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24">
    <path
      d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
  </svg>
      </label>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-Tangerine rounded-box z-[10] mt-3 w-52 p-2 shadow right-0 *:text-white">
        <NavLink to='/'><a>Home</a></NavLink>
        <NavLink to='/allVisa'><a>All visas</a></NavLink>
        <NavLink to='/addVisa'><a>Add Visa</a></NavLink>
        <NavLink to='/myAddedVisa'><a>My added visas</a></NavLink>
        <NavLink to='/myAppliedVisa'><a>My Visa applications</a></NavLink>
      </ul>
    </div>
  </div>

</div>
       </nav>
       <div className='lg:hidden'>
          <div className='flex items-center justify-center gap-3 mb-5'>
            {
              user ? <Link onClick={signOutUser} to='/' className='text-white text-lg lg:text-xl font-semibold bg-Tangerine py-2 px-8'>Log Out</Link> : <Link to='/logIn' className='text-white text-lg lg:text-xl font-semibold bg-Tangerine py-2 px-8'>Log In</Link>
            }
             {
              user ? <img src={user?.photoURL} alt="" className='w-12 h-12 rounded-full cursor-pointer' title={user?.displayName}/>:<Link to='/register' className='text-white text-lg lg:text-xl font-semibold bg-Tangerine py-2 px-5'>Register</Link>
             }
    </div>
       </div>
      </div>
    </div>
  )
}
