
import { Link, NavLink } from 'react-router-dom'
import logo from '../assets/icons8-world-50.png'
import { useContext } from 'react'
import { AuthContext } from '../AuthProvider/AuthProvider'
export default function Navbar() {
  const {user,signOutUser } = useContext(AuthContext);
  
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
             {
              user ? <img src={user?.photoURL} alt="" className='w-12 h-12 rounded-full cursor-pointer' title={user?.displayName}/>:<Link to='/register' className='text-white text-lg lg:text-xl font-semibold bg-Tangerine py-2 px-5'>Register</Link>
             }
           
    </div>
    </div>
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
              user ? <Link to='/logIn' className='text-white text-lg lg:text-xl font-semibold bg-Tangerine py-2 px-8'>Log Out</Link> : <Link to='/logIn' className='text-white text-lg lg:text-xl font-semibold bg-Tangerine py-2 px-8'>Log In</Link>
            }
    
           <Link to='/register' className='text-white text-lg lg:text-xl font-semibold bg-Tangerine py-2 px-5'>Register</Link>
    </div>
       </div>
      </div>
    </div>
  )
}
