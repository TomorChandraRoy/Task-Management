/* eslint-disable react/prop-types */
import  { useState, useEffect } from "react";
import './Style.css'

  
  const DragDrop = ({ tasks }) => {

    

    const [stateTasks, setStateTasks] = useState(tasks);
  
    useEffect(() => {
      setStateTasks(tasks);
    }, [tasks]);
  
    const onDragStart = (evt) => {
      let element = evt.currentTarget;
      element.classList.add("dragged");
      evt.dataTransfer.setData("text/plain", evt.currentTarget.id);
      evt.dataTransfer.effectAllowed = "move";
    };
  
    const onDragEnd = (evt) => {
      evt.currentTarget.classList.remove("dragged");
    };
  
    const onDragEnter = (evt) => {
      evt.preventDefault();
      let element = evt.currentTarget;
      element.classList.add("dragged-over");
      evt.dataTransfer.dropEffect = "move";
    };
  
    const onDragLeave = (evt) => {
      let currentTarget = evt.currentTarget;
      let newTarget = evt.relatedTarget;
      if (newTarget?.parentNode === currentTarget || newTarget === currentTarget)
        return;
      evt.preventDefault();
      let element = evt.currentTarget;
      element.classList.remove("dragged-over");
    };
  
    const onDragOver = (evt) => {
      evt.preventDefault();
      evt.dataTransfer.dropEffect = "move";
    };
  
    const onDrop = (evt, value, status) => {
      evt.preventDefault();
      evt.currentTarget.classList.remove("dragged-over");
      let data = evt.dataTransfer.getData("text/plain");
      let updated = stateTasks.map((task) => {
        if (task.id.toString() === data.toString()) {
          task.status = status;
        }
        return task;
      });
      setStateTasks(updated);
    };
  
    const renderTaskColumn = (taskList, status) => (
      <div
        className={`small-box ${status.toLowerCase()}`}
        onDragLeave={onDragLeave}
        onDragEnter={onDragEnter}
        onDragEnd={onDragEnd}
        onDragOver={onDragOver}
        onDrop={(e) => onDrop(e, status === "Completed", status)}
      >
        <section className="drag_container">
          <div className="container">
            <div className="drag_column">
              <div className="drag_row">
                <h4>{status}</h4>
                {taskList.map((task) => (
                  <div
                    className="card"
                    key={task.name}
                    id={task.id}
                    draggable
                    onDragStart={onDragStart}
                    onDragEnd={onDragEnd}
                  >
                    <div className="img">
                      <img src={task.image} alt="box" />
                    </div>
                    <div className="card_right">
                      <div className="status">{task.status}</div>
                      <div className="days">{task.time}</div>
                      <div className="time">{task.days}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  
    return (
      <div className="container">
        {renderTaskColumn(stateTasks.filter((data) => data.status === "New Order"), "New Order")}
        {renderTaskColumn(stateTasks.filter((data) => data.status === "In Progress"), "In Progress")}
        {/* {renderTaskColumn(stateTasks.filter((data) => data.status === "Delivered"), "Waiting for buyer")} */}
        {renderTaskColumn(stateTasks.filter((data) => data.status === "Completed"), "Completed")}
      </div>
    );
  };
  
  



export default DragDrop;