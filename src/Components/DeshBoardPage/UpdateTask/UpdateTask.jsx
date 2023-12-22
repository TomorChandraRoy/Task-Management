import { useForm } from "react-hook-form";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import { useContext } from "react";
import Swal from "sweetalert2";



const UpdateTask = () => {
    const {title, date, notes, priority, _id} = useLoaderData();
    
    const { user } = useContext(AuthContext);
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = async (data) => {
    
        console.log(data)
          const taskItem = {
           date: data.date,
           name: data.name,
           notes: data.notes,
           priority: data.priority,
           title: data.title,
            time: new Date(),
            email: user.email
          }
          console.log(taskItem)
        
          fetch(`http://localhost:5000/usertasks/${_id}`, {
        method: 'PUT',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(taskItem)
      })
      .then(res => res.json())
      .then(data => {
        if(data.matchedCount) {
            reset()
          Swal.fire({
              title: 'success!!',
              text: 'Item Details Updated Successfully',
              icon: 'success',
              confirmButtonText: 'Cool'
            })
      }
      })
       
      };
    return (
        <div className="mb-20">
        <h1 className="text-center my-5 uppercase font-bold text-3xl lg:5xl">Update the Task</h1>
        <div data-aos="zoom-in-up" data-aos-duration="2500" className='mt-12 bg-[rgb(190,255,255)] border-4 border-[#23e66e] shadow-lg rounded-lg p-5'>
    <form onSubmit={handleSubmit(onSubmit)}>
     
     <div className="flex w-full gap-4 my-6">
     <div className="flex-1">
     <label className="label">
          <span className="label-text">
           User Name
          </span>
        </label>
        <input type="text" defaultValue={user?.displayName} readOnly placeholder="User Name"{...register("name", { required: true})}
        className="input input-bordered input-warning w-full" />
     </div>
      <div className="form-control w-full flex-1">
        <label className="label">
          <span className="label-text">
           Title
          </span>
        </label>
        <input type="text" defaultValue={title} placeholder="Title of the Task"{...register("title", { required: true})}
        className="input input-bordered input-warning w-full" />
      </div>
     </div>
     
     <div className="flex w-full gap-4 my-6">
     <div className="flex-1">
     <label className="label">
          <span className="label-text">
           Deadline
          </span>
        </label>
        <input type="date" defaultValue={date} {...register("date", { required: true})}
        className="input input-bordered input-warning w-full" />
     </div>
     <div className="flex-1">
    <label className="label">
        <span className="label-text">
        Priority
        </span>
    </label>
    <select defaultValue={priority} {...register("priority", { required: true })} className="select select-bordered select-warning w-full">
        <option value="high">High</option>
        <option value="medium">Medium</option>
        <option value="low">Low</option>
    </select>
    </div>
     </div>
     <div className="w-full lg:w-1/2">
    <label className="label">
        <span className="label-text">
        Additional Notes
        </span>
    </label>
    <textarea defaultValue={notes} {...register("notes", { required: true })} className="textarea textarea-bordered textarea-warning w-full" rows="4"></textarea>
    </div>
            
    <button className="btn  btn-block btn-primary border-0  mt-4">Update</button>
     
    </form>
  </div>
    </div>
    );
};

export default UpdateTask;