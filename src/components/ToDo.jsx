import React from 'react';
const ToDo = ({ toDo, doneTask, deleteTask }) => {
  return(
    <>
      {toDo && toDo
      .sort((a, b) => a.id > b.id ? 1 : -1)
      .map( (task, index) => {
        return(
            <React.Fragment key={task.id}>
            <div className='col taskBG'>
                <div className={task.status ? 'done': ''}>
                <div className='positionNo'>
                        <span className='taskNo'>{index + 1}</span>
                        <span className='taskText'>{task.title}</span>
                    </div>
                    <div className='buttonWrap'> 
                        <span title={task.status ? 'Undone' : 'Done'} onClick={() => doneTask(task.id)}>
                            <button className={task.status ? 'btnUndone' : 'btnDone'}>
                                {task.status ? 'Undone' : 'Done'}
                            </button>
                        </span>
                        <span title='Delete' onClick={() => deleteTask(task.id)}>
                            <button className='btnDelete'>Delete</button>
                        </span>
                    </div>
                </div>
            </div>
        </React.Fragment> 
        )
      })
      }  
    </>
  )
}

export default ToDo;