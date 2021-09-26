import Transaction from './components/Transaction'
import './components/app.css'
import FormComponent from './components/FormComponent'
import { v4 as uuidv4 } from 'uuid'
import { useState } from 'react'

function App() {
  const [items, setItems] = useState([
    { id: uuidv4(), title: 'ค่าน้ำมัน', amount: 5000 },
    { id: uuidv4(), title: 'ค่าเช่าบ้าน', amount: 8000 },
    { id: uuidv4(), title: 'เงินเดือน', amount: 70000 },
    { id: uuidv4(), title: 'จ่ายค่าประกัน', amount: 300 },
    { id: uuidv4(), title: 'ค่าเดินทาง', amount: 800 }
  ])

  const onAddNewItem = (newItem) => {
    setItems([newItem, ...items])
  }

  return (
    <>
      <h1 style={{ color: 'red', textAlign: 'center' }}>
        แอพบัญชีรายรับ - รายจ่าย
      </h1>
      <FormComponent onAddNewItem={onAddNewItem} />
      <Transaction items={items} />
    </>
  )
}

export default App
