import { useContext } from "react";
import {  NavLink, Outlet } from "react-router-dom";
import { FaBook, FaImage,  } from "react-icons/fa";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { IoHome } from "react-icons/io5";
import { BiAddToQueue } from "react-icons/bi";


const Dashboard = () => {
    const { user } = useContext(AuthContext);

    return (
        <div className="font-poppins">

            <div className="drawer lg:drawer-open ">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col p-10">
                    <label htmlFor="my-drawer-2" className=" drawer-buttona lg:hidden absolute right-0 top-2 btn cursor-pointer bg-[#77f4f4] hover:bg-[#23e6e6]">open dashboard</label>
                    <Outlet></Outlet>


                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 h-full bg-[#a79531] text-gray-50">
                        {/* Sidebar content here */}

                        <div className="p-4">
                            <div className="text-center">
                                <img className="w-20 h-20 rounded-full mx-auto mb-2" src={user?.photoURL} alt="Profile" />
                                <h4 className="text-lg font-bold pb-2">
                                    {user?.displayName}
                                    <span className='bg-[#163333] ml-3 text-white font-semibold text-xs px-2 py-1 rounded-full'>User</span>

                                </h4>
                                <p className="text-gray-600 ">{user?.email}</p>
                                <p className="pt-3 font-medium">Task management dashboard</p>
                            </div>
                        </div>
                        <hr className='border-2 border-black mb-5'  />

                        <li> <NavLink to="newtasks" ><FaBook></FaBook> Create Task</NavLink> </li>
                        <li> <NavLink to="/"><IoHome /> Home</NavLink> </li>
                        <li> <NavLink to="previousTask"><FaImage></FaImage>PreviousTask</NavLink> </li>
                        <li> <NavLink to="dragdrop"><BiAddToQueue />Dragdrop</NavLink> </li>

                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;








































// import { Link, Outlet } from "react-router-dom";
// import { AuthContext } from "../../AuthProvider/AuthProvider";
// import { useContext } from "react";
// import { IoHome } from "react-icons/io5";

// const UserDasbord = () => {
//     const { user } = useContext(AuthContext);
//     console.log(user);
//     return (
//         <>
//         <div className="flex">
//             <div className="w-64 min-h-full bg-slate-200">
//                 <h3>Darsbord</h3>
//             </div>

//             <div className="flex-1">
//                 <Outlet></Outlet>
//             </div>
//         </div>
//         </>
//     );
// };

// export default UserDasbord;

{/* <div className="flex items-center justify-between px-8 py-5">
                        <div className="flex items-center mr-5">
                            <div className="mr-5">
                                <div className="inline-block relative shrink-0 cursor-pointer rounded-[.95rem]">
                                    <img className="w-[50px] lg:h-[50px] h-[40px] shrink-0 inline-block rounded-[.95rem]" src={user?.photoURL} alt="avatar image" />
                                </div>
                            </div>
                            <div className="mr-2 ">
                                <a href="javascript:void(0)" className="dark:hover:text-primary hover:text-primary transition-colors duration-200 ease-in-out text-[1.075rem] font-medium dark:text-neutral-400/90 text-secondary-inverse">{user?.displayName}</a>
                                <span className="text-secondary-dark dark:text-stone-500 font-medium block text-[0.85rem]">Task Manager</span>
                            </div>
                        </div>
                        <Link to='/' className="inline-flex relative items-center group justify-end text-base font-medium leading-normal text-center align-middle cursor-pointer rounded-[.95rem] transition-colors duration-150 ease-in-out text-dark bg-transparent shadow-none border-0" >
                            <span className="leading-none transition-colors duration-200 ease-in-out peer shrink-0 group-hover:text-primary text-secondary-dark ">
                            <IoHome className=" w-6 h-10" ></IoHome>
                            </span>
                        </Link>
                    </div> */}