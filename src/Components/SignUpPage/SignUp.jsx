
import { useContext, useState } from "react";
import swal from "sweetalert";

import { Link, useNavigate } from "react-router-dom";
import { updateProfile } from "firebase/auth";
import { AuthContext } from "../../AuthProvider/AuthProvider";


const SignUpPage = () => {
    const {signUp} = useContext(AuthContext);
    const [pass, setPass] =useState('');
   const navigate = useNavigate();
    const handleSignUp = e =>{
        e.preventDefault();

        const name =e.target.name.value
        const photo = e.target.url.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

        console.log(photo,name,email,password);
        
        if(password.length < 6){
            console.log('You have must 6 chartecter is longer then')
            setPass('You have must 6 chartecter is longer then')
            return;
        }
        else if (!/[A-Z](?=.*[!#$%&?"])/.test(password)){
            setPass('Enter 1 special characters and capital letter  ');
            return;
        }
        setPass("");

        signUp(email,password)
        .then(result=>{
            console.log(result.user)
            swal("Good !", "You Accounts successful!", "success");
            e.target.reset();
            updateProfile(result?.user,{
              displayName: name,
              photoURL:photo
            })   
           navigate('/')
        })
        .catch(error=>{
            console.log(error);
            swal("Sorry!", "Your email is already there. !", "error");
        })
     
    }
    return (
        <div className="bg-orange-100 my-5">
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                        Registration your account
                    </h2>
                </div>

                <div className=" shadow-2xl shadow-lime-600 p-5 rounded-md mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form onSubmit={handleSignUp} className="space-y-6" action="#" method="POST">
                        <div>
                            <label htmlFor="Name" className="block text-sm font-medium leading-6 text-gray-900">
                                Your Name
                            </label>
                            <div className="mt-2">
                                <input

                                    name="name"
                                    type="text"
                                    autoComplete="name"
                                    required
                                    className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="Name" className="block text-sm font-medium leading-6 text-gray-900">
                                Your Photo URL
                            </label>
                            <div className="mt-2">
                                <input
                                    id="url"
                                    name="url"
                                    type="url"
                                    autoComplete="name"
                                    required
                                    className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"

                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                Email address
                            </label>
                            <div className="mt-2">
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                    Password
                                </label>
                            </div>
                            <div className="mt-2">
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete="current-password"
                                    required
                                    className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        <p></p>
                        {pass && (
                            <p className="text-red-600 mt-5">{pass}</p>
                        )}

                        <div>
                            <button
                                type="submit"
                                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Registration
                            </button>
                        </div>
                    </form >
                    <p className="mt-2">Allready have a account? <Link className="text-green-400 " to='/login'>Please Login</Link></p>

                </div>
            </div>

        </div>

    );
};

export default SignUpPage;