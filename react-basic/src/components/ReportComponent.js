import { useContext } from 'react'
import indexContext from '../contexts/indexContext'

const ReportComponent = () => {
  const { income, expense } = useContext(indexContext)
  return (
    <>
      <h4>ยอดคงเหลือ (บาท)</h4>
      <h1>{income - expense}</h1>
      <p>รายรับ : {income}</p>
      <p>รายจ่าย : {expense}</p>
    </>
  )
}

export default ReportComponent
