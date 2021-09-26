import { useState } from 'react'
import './App.css'
import { useDataLayerValue } from './context-api/DataLayer'
import { actionTypes } from './context-api/reducer'

function App() {
  const [name, setName] = useState('')
  const [{ user }, dispatch] = useDataLayerValue()
  const onInputChange = (event) => setName(event.target.value)
  const funcUpdateName = () => {
    dispatch({
      type: actionTypes.SET_USER,
      user: name
    })
  }
  return (
    <div className="App">
      <h1>My name is {user}</h1>
      <input type="text" value={name} onChange={onInputChange} />
      <button onClick={funcUpdateName}>Modify Name</button>
    </div>
  )
}

export default App
