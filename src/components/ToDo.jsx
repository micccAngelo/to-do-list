import React from 'react';
const ToDo = ({ toDo, doneTask, deleteTask }) => {
  // Keep track of the maximum task id
  const maxTaskId = toDo.reduce((maxId, task) => Math.max(maxId, task.id), 0);

  return (
    <>
      {toDo &&
        toDo
          .sort((a, b) => a.id > b.id ? 1 : -1)
          .map((task) => {
            return (
              <React.Fragment key={task.id}>
                <div className="col taskBG">
                  <div className={task.status ? "done" : ""}>
                    <div className="positionNo">
                      <span className="taskNo">
                        {task.id - (maxTaskId - toDo.length)}
                      </span>
                      <span className="taskText">{task.title}</span>
                    </div>
                    <div className="buttonWrap">
                      <span
                        title={task.status ? "Undone" : "Done"}
                        onClick={() => doneTask(task.id)}
                      >
                        <button
                          className={task.status ? "btnUndone" : "btnDone"}
                        >
                          {task.status ? "Undone" : "Done"}
                        </button>
                      </span>
                      <span title="Delete" onClick={() => deleteTask(task.id)}>
                        <button className="btnDelete">Delete</button>
                      </span>
                    </div>
                  </div>
                </div>
              </React.Fragment>
            );
          })}
    </>
  );
};

export default ToDo;