import Transaction from './components/Transaction'
import './components/app.css'
import FormComponent from './components/FormComponent'
import { useState, useEffect } from 'react'
import indexContext from './contexts/indexContext'
import ReportComponent from './components/ReportComponent'

function App() {
  const [items, setItems] = useState([])

  const [reportIncome, setReportIncome] = useState(0)
  const [reportExpense, setReportExpense] = useState(0)

  const onAddNewItem = (newItem) => {
    setItems([newItem, ...items])
  }

  useEffect(() => {
    const amounts = items.map((item) => item.amount)
    const income = amounts
      .filter((amount) => amount > 0)
      .reduce((total, amount) => total + amount, 0)
    const expense =
      amounts
        .filter((amount) => amount < 0)
        .reduce((total, amount) => total + amount, 0) * -1
    setReportExpense(expense)
    setReportIncome(income)
  }, [items])

  return (
    <indexContext.Provider
      value={{ income: reportIncome, expense: reportExpense }}
    >
      <div className="container">
        <h1 style={{ color: 'red', textAlign: 'center' }}>
          แอพบัญชีรายรับ - รายจ่าย
        </h1>
        <ReportComponent />
        <FormComponent onAddNewItem={onAddNewItem} />
        <Transaction items={items} />
      </div>
    </indexContext.Provider>
  )
}

export default App
