import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { useContext } from "react";


const Navbar = () => {

    const{user, logOut}= useContext(AuthContext);
    const handleSignOut=()=>{
        logOut()
        .then()
        .catch()
    }
  

    const navLinks = (
        <div className="flex text-amber-50  lg:gap-4">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/Terms">Terms</NavLink></li>
            <li><NavLink to="/privacy">Privacy</NavLink></li>
            <li><NavLink to="/about">About Us</NavLink></li>
        </div>
    )
    return (
        <div className="navbar  bg-gray-800 mb-5 mt-2 rounded">
        <div className="navbar-start ">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" 
                 className="h-5 w-5 bg-white" fill="none" viewBox="0 0 24 24"  stroke="currentColor">
                 <path strokeLinecap="round" strokeLinejoin="round"  strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16"/>
              </svg>
            </label>
            <ul tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2  shadow bg-base-100 rounded-box w-[405px]">

              {navLinks}

            </ul>
          </div>
          <div ><img className="w-[200px] h-[50px] " src="https://i.ibb.co/Q8xwNzW/scc-removebg-preview.png" alt="scc"/></div>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {navLinks}
          </ul>
        </div>

        <div className="navbar-end gap-5">
          {
              user ?
              <>
              <div className="flex justify-center items-center gap-2">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar ">
                  <div className="w-10 rounded-full">
                    {
                      user &&
                      <img src={user?.photoURL} alt="" />
                    }
                   
                  </div>

                </label>
                { user &&
                  <div><p className="text-white">{user.displayName}</p>
                     
                  </div>
               
                  }
              </div>

                <button onClick={handleSignOut} className="btn">LogOut</button>
              </>
              : <Link to='/login' ><button  className="btn">Login</button></Link>
            }

        </div>
      </div>
    );
};
    


export default Navbar;