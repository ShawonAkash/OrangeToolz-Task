import { useState } from "react"

const AddTask = ({ onAdd }) => {
  const [text, setText] = useState('')
  const [day, setDay] = useState('')
  const [duration, setDuration] = useState('')
  const [type, setType] = useState('')
  const [reminder, setReminder] = useState(false)
  const onSubmit = (e) => {
    e.preventDefault()
    if (!text) {
      alert('Please add a task')
      return
    }
    onAdd({ text, day, duration, type, reminder })
    setText('')
    setDay('')
    setDuration('')
    setType('')
    setReminder(false)
  }
  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
        <label>Task</label>
        <input type='text' placeholder="Add Task" value={text} onChange={(e) => setText(e.target.value)} />
      </div>
      <div className="form-control">
        <label>Day & Time</label>
        <input type='datetime-local' placeholder="Add day & time" value={day} onChange={(e) => setDay(e.target.value)} />
      </div>
      <div className="form-control">
        <label>Duration</label>
        <input type='time' placeholder="Add duration" value={duration} onChange={(e) => setDuration(e.target.value)} />
      </div>
      <div className="form-control">
        <label for='type'>Type</label>
        <select id="cars" onChange={(e) => setType(e.target.value)}>
          <option value="Call">Call</option>
          <option value="Email">Email</option>
          <option value="Alarm">Alarm</option>
          <option value="Deadline" selected>Deadline</option>
        </select >
      </div>
      <div className="form-control form-control-check">
        <label>SetReminder</label>
        <input type='checkbox' checked={reminder} value={reminder} onChange={(e) => setReminder(e.currentTarget.checked)} />
      </div>

      <input type='submit' value='Save Task' className='btn btn-block' />
    </form>
  )
}

export default AddTask