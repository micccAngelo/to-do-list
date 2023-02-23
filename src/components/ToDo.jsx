import React from 'react';
const ToDo = (props) => {
  return (
    <>
      {props.toDo &&
        props.toDo
        //untuk data jika dimasukan manual
          .sort((a, b) => a.id > b.id ? 1 : -1)
          .map((task, index) => {
            return (
              <div className="col taskBG" key={task.id}>
                <div className={task.status ? "done" : ""}>
                  <div className="positionNo">
                    <span className="taskNo">
                      {index + 1}
                    </span>
                    <span className="taskText">{task.title}</span>
                  </div>
                  <div className="buttonWrap">
                    <span
                      title={task.status ? "Undone" : "Done"}
                      onClick={() => props.doneTask(task.id)}
                    >
                      <button
                        className={task.status ? "btnUndone" : "btnDone"}
                      >
                        {task.status ? "Undone" : "Done"}
                      </button>
                    </span>
                    <span title="Delete" onClick={() => props.deleteTask(task.id)}>
                      <button className="btnDelete">Delete</button>
                    </span>
                  </div>
                </div>
              </div>
          );
        })}
    </>
  );
};

export default ToDo;