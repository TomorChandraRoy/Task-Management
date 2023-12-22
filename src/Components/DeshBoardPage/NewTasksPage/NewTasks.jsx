
import { useContext } from 'react';
import { AuthContext } from './../../../AuthProvider/AuthProvider';
import { useForm } from 'react-hook-form';
import swal from 'sweetalert';


const CreateTask = () => {

    const { user } = useContext(AuthContext);
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = async (data) => {

        console.log(data)
        const taskData = {
            date: data.date,
            name: data.name,
            description: data.description,
            priority: data.priority,
            title: data.title,
            time: new Date(),
            email: user.email
        }
        console.log(taskData)

        fetch('http://localhost:5000/addTasks', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(taskData)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    reset()
                    swal("Congratulation!", "You successfully  task a Create!", "success");
                       
                }
            })

    };
    return (
        <div className="mb-10  font-poppins">
            <h1 className="text-center mt-10 lg:mt-0  uppercase font-bold text-3xl lg:5xl">Create A Task</h1>
            <div data-aos="zoom-in-up" data-aos-duration="2500" className='mt-5 bg-[#1a2a47] shadow-lg rounded-lg p-5'>
                <form onSubmit={handleSubmit(onSubmit)}>

                    <div className="flex w-full gap-4 my-6">
                        <div className="flex-1">
                            <label className="label">
                                <span className="label-text text-white">
                                    User Name
                                </span>
                            </label>
                            <input type="text" defaultValue={user?.displayName} readOnly placeholder="User Name"{...register("name", { required: true })}
                                className="input input-bordered input-warning w-full" />
                        </div>
                        <div className="form-control w-full flex-1">
                            <label className="label">
                                <span className="label-text text-white">
                                    Title
                                </span>
                            </label>
                            <input type="text" required placeholder="Title of the Task"{...register("title", { required: true })}
                                className="input input-bordered input-warning w-full" />
                        </div>
                    </div>

                    <div className="flex w-full gap-4 my-6">
                        <div className="flex-1">
                            <label className="label">
                                <span className="label-text text-white">
                                    Deadline
                                </span>
                            </label>
                            <input type="date" required {...register("date", { required: true })}
                                className="input input-bordered input-warning w-full" />
                        </div>
                        <div className="flex-1">
                            <label className="label">
                                <span className="label-text text-white">
                                    Priority
                                </span>
                            </label>
                            <select required {...register("priority", { required: true })} className="select select-bordered select-warning w-full">
                                <option disabled selected>Select a Priority ?</option>
                                <option value="high">High</option>
                                <option value="medium">Medium</option>
                                <option value="low">Low</option>
                            </select>
                        </div>
                    </div>
                    <div className="w-full lg:w-1/2">
                        <label className="label">
                            <span className="label-text text-gray-50">
                                Description
                            </span>
                        </label>
                        <textarea required {...register("description")} className="textarea textarea-bordered textarea-warning w-full" rows="4"></textarea>
                    </div>


                    <button className="btn  btn-block btn-primary border-0  mt-4">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default CreateTask;



// const NewTasks = () => {
//     const { register, handleSubmit } = useForm()
//     const onSubmit = (data) => {
//         console.log(data)
//     };

//     return (
//         <div className=" font-poppins">
//             <h2 className="text-center font-bold text-4xl mb-4">Create a tasks</h2>
//             <div>
//                 <form onSubmit={handleSubmit(onSubmit)} className="bg-gradient-to-r from-green-400 to-blue-300 ...  shadow-cyan-500/50 shadow-2xl p-7">

//                     <div className="flex gap-4">
//                         <div className="Form-control w-full my-2">
//                             <label className="form-control w-full">
//                                 <div className="label">
//                                     <span className="label-text">Tasks name*</span>
//                                 </div>
//                                 <input {...register("name", { required: true})} type="text" placeholder="Title" className="input input-bordered w-full " />

//                             </label>
//                         </div>

//                         <div className="Form-control w-full my-2">
//                             <label className="form-control w-full">
//                                 <div className="label">
//                                     <span className="label-text">Description*</span>
//                                 </div>
//                                 <textarea {...register("description",{ required: true})} type="text" placeholder="Title" className="input input-bordered w-full " />

//                             </label>
//                         </div>
//                     </div>

//                     <div className="flex gap-5">
//                         <div className="Form-control w-full my-2">
//                             <label className="label">
//                             <span className="label-text">Priority*</span>
//                             </label>
//                             <select {...register("priority",{ required: true})} className="select select-bordered w-full">
//                                     <option disabled selected>Select a Priority ?</option>
//                                     <option value="Low">Low</option>
//                                     <option value="Moderate">Moderate</option>
//                                     <option value="High">High</option>
//                                 </select>
//                         </div>

//                         <div className="Form-control w-full my-2 mb-4">
//                             <label className="form-control w-full">
//                                 <div className="label">
//                                     <span className="label-text">Date*</span>
//                                 </div>
//                                 <input {...register("date", { required: true})} type="date" placeholder="Title" className="input input-bordered w-full " />

//                             </label>
//                         </div>

//                     </div>
//                     <button className="btn btn-block btn-primary" >Submit</button>
//                 </form>
//             </div>
//         </div>
//     );
// };

// export default NewTasks;