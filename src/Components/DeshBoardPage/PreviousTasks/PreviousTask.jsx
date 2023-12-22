import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import { Link, } from "react-router-dom";
import { MdDelete } from "react-icons/md";
import { GrUpdate } from "react-icons/gr";
import Swal from "sweetalert2";

const PreviousTask = () => {
  const { user } = useContext(AuthContext);
  const [totalTask, setTotalTask] = useState([]);
  const [selectedUserId, setSelectedUserId] = useState(null);
  console.log(totalTask);
  const data = totalTask.filter((data) => data._id === selectedUserId)
  console.log(data)

  useEffect(() => {
    const url = `https://task-management-server-site-amber.vercel.app/userTasks?email=${user?.email}`;
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setTotalTask(data);
      })
  }, [user?.email]);

  const handleDeleteItem = (id) => {
    console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://task-management-server-site-amber.vercel.app/userTasks/${id}`,{
              method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
          if(data.deletedCount > 0){
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success"
            });
            const remaining = totalTask?.filter((item) => item._id !== id);
            setTotalTask(remaining)
          }
        })
        
      }
    });
    
   }




  return (
    <div >
      <h1 className="text-center my-12 uppercase font-bold text-3xl lg:5xl">Previous All Task {totalTask?.length}</h1>
      <div className="overflow-x-auto bg-slate-200 ">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>
                Serial No
              </th>
              <th>Title</th>
              <th>Deadlines</th>
              <th>Priority</th>
              <th>User email</th>
              <th>User Name</th>
              <th>Details</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody className="text-center">
            {/* row  */}
            {
              totalTask?.length && totalTask.map((item, index) => (
                <tr key={item._id}>
                  <th>
                    {index + 1}
                  </th>
                  <td>
                    {item.title}
                  </td>
                  <td>
                    {item.date}

                  </td>
                  <td>
                    {item.priority}
                  </td>
                  <td>
                    {item.email}
                  </td>
                  <td>
                    {item.name}

                  </td>
                  <td>
                    <div>
                      <button
                        onClick={() => {
                          document.getElementById('my_modal_3').showModal();
                          setSelectedUserId(item._id);
                        }}
                        className="btn btn-primary "
                      >Details</button>
                      <dialog id="my_modal_3" className="modal">
                        <div className="modal-box">

                          <div className="flex justify-end">
                            <button onClick={() => document.getElementById('my_modal_3').close()} className="btn btn-warning">Close</button>
                          </div>
                          {
                            data?.map((i) => (
                              <div key={i._id} className="text-start">
                                <div className="text-center text-xl uppercase font-semibold mb-5">{i.title}</div>
                                <div className="flex justify-between mb-3">
                                  <div><span className="font-semibold">Creator Name:</span> {i.name}</div>
                                  <div><span className="font-semibold">Creator Email: </span>{i.email}</div>
                                </div>
                                <div className="flex justify-between mb-3">
                                  <div><span className="font-semibold">Create Time: </span>{i.time}</div>
                                  <div className="text-red-600"><span className="font-semibold"> Deadlines: </span>{i.date}</div>
                                </div>
                                <div className="font-bold text-green-600 mb-2">Priority: {i.priority}</div>
                                <div> <span className="font-bold">Description: </span> {i.description}</div>


                              </div>
                            ))
                          }

                        </div>
                      </dialog>
                    </div>
                  </td>

                  <td>
                    <Link to={`updateTask/${item._id}`}><button className="btn  btn-warning"><GrUpdate className="className="w-8 h-8  /></button> </Link>
                  </td>
                  <td>
                    <button onClick={() => handleDeleteItem(item?._id)} className="btn btn-square btn-info"><MdDelete className="w-8 h-8 " /></button>
                  </td>
                  <td>
                    {item.price}
                  </td>
                </tr>
              ))
            }

          </tbody>

        </table>
      </div>

    </div>
  );
};

export default PreviousTask;

