import Transaction from './components/Transaction'
import './components/app.css'
import FormComponent from './components/FormComponent'
import { useState, useEffect } from 'react'
import indexContext from './contexts/indexContext'
import ReportComponent from './components/ReportComponent'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

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
    setReportExpense(expense.toFixed(2))
    setReportIncome(income.toFixed(2))
  }, [items])

  return (
    <indexContext.Provider
      value={{ income: reportIncome, expense: reportExpense }}
    >
      <div className="container">
        <h1 style={{ color: 'red', textAlign: 'center' }}>
          แอพบัญชีรายรับ - รายจ่าย
        </h1>
        <Router>
          <Link to="/">แสดงรายงาน</Link> |<Link to="/insert">บันทึกข้อมูล</Link>
          <Switch>
            <Route path="/" exact>
              <ReportComponent />
            </Route>
            <Route path="/insert">
              <FormComponent onAddNewItem={onAddNewItem} />
              <Transaction items={items} />
            </Route>
          </Switch>
        </Router>
      </div>
    </indexContext.Provider>
  )
}

export default App
