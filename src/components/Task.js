import { FaTimes, faTimes } from 'react-icons/fa'
const Task = ({ task, onDelete, onToggle }) => {
  return (
    <tr >
      <td>{task.text}</td>
      <td>{task.day}</td>
      <td>{task.duration}</td>
      <td>{task.type}</td>
      <td><FaTimes onClick={() => onDelete(task.id)} style={{ color: 'red' }} /></td>

    </tr>
  )
}

export default Task