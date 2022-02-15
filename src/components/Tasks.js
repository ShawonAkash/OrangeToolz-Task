import Task from "./Task"
const Tasks = ({ tasks, onDelete, onToggle }) => {


  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Date</th>
            <th>Duration(min)</th>
            <th>Type</th>
            <th></th>
          </tr>
        </thead>


        {tasks.map(task =>
          <tbody key={task.id} className={`task ${task.reminder ? 'reminder' : ''}`} onDoubleClick={() => onToggle(task.id)}>
            <Task task={task} onDelete={onDelete} onToggle={onToggle} />
          </tbody>
        )}


      </table>
    </>
  )
}

export default Tasks