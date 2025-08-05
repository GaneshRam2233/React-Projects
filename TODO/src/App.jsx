import React, { useEffect, useState } from 'react'
import axios from 'axios'

const App = () => {

  let [task, setTask] = useState()  // ? to store input value
  let [data, setData] = useState([])  // ? to store fetched data -> array of objects

  // todo fetch whole data
  let fetchedData = async () => {
    let res = (await axios.get("http://localhost:5000/tasks")).data // ? axios gives object with headers,data,status
    console.log(res)
    // res = res.reverse()
    setData(res) // ? setting fetched data to data state
  }

  // todo delete specific data
  let deleteTask = async (id) => {
    await axios.delete(`http://localhost:5000/tasks/${id}`)
    fetchedData()
  }

  useEffect(() => {
    fetchedData()
  }, [])

  // todo add new Task
  let addTask = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:5000/tasks", { task })
    fetchedData()
    setTask("")
  }

  return (
    <div className="outer">
      <div className='todo'>
        <h1 id='heading'>TODO List</h1>
        <form >
          <input placeholder='Add the Task' type="text" value={task} onChange={(e) => setTask(e.target.value)} />
          <button onClick={addTask} >Add Task</button>
        </form>
        <h1 id='subheading'>Tasks</h1>
        <ol>
          {
            data.map((value) => {
              return (
                <div className='task'>
                  <li key={value.id} >{value.task}</li>
                  <div className="btns">
                    <button id='updatebtn' >Update</button>
                    <button onClick={() => deleteTask(value.id)} id='deletebtn' >Delete</button>
                  </div>
                </div>
              )
            })
          }
        </ol>
      </div>
    </div>
  )
}

export default App
