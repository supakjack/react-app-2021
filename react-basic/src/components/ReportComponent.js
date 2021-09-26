import { useContext } from 'react'
import indexContext from '../contexts/indexContext'

const ReportComponent = () => {
  const formatNumber = (num) => {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
  }
  const { income, expense } = useContext(indexContext)
  return (
    <>
      <h4>ยอดคงเหลือ (บาท)</h4>
      <h1>{formatNumber((income - expense).toFixed(2))}</h1>
      <p>รายรับ : {formatNumber(income)}</p>
      <p>รายจ่าย : {formatNumber(expense)}</p>
    </>
  )
}

export default ReportComponent
