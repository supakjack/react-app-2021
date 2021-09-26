import { useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid'

const FormComponent = ({ onAddNewItem }) => {
  const [title, setTitle] = useState('')
  const [amount, setAmount] = useState(0)
  const [formValid, setFormValid] = useState(false)

  const inputTitle = (event) => {
    setTitle(event.target.value)
  }

  const inputAmount = (event) => {
    setAmount(Number(event.target.value))
  }

  const saveItem = (event) => {
    event.preventDefault()
    const itemData = {
      id: uuidv4(),
      title: title,
      amount: amount
    }
    onAddNewItem(itemData)
    setTitle('')
    setAmount(0)
  }

  useEffect(() => {
    const checkData = title.trim().length > 0 && amount !== 0
    setFormValid(checkData)
  }, [amount, title])

  return (
    <div>
      <form onSubmit={saveItem}>
        <div className="mb-3">
          <label className="form-label">ชื่อรายการ</label>
          <input
            type="text"
            className="form-control"
            placeholder="ระบุชื่อรายการของคุณ"
            value={title}
            onChange={inputTitle}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">จำนวนเงิน</label>
          <input
            type="number"
            className="form-control"
            placeholder="ระบุจำนวนเงิน (+ รายรับ , - รายจ่าย)"
            value={amount}
            onChange={inputAmount}
          />
        </div>
        <div className="col-auto">
          <button
            type="submit"
            className="btn btn-primary mb-3"
            disabled={!formValid}
          >
            เพิ่มข้อมูล
          </button>
        </div>
      </form>
    </div>
  )
}

export default FormComponent
// rafce no proptypes
// rafcp with proptypes
