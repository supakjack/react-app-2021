import Item from './Item'
import { v4 as uuidv4 } from 'uuid'

const data = [
  { id: uuidv4(), title: 8000, amount: 'ค่าขนส่ง' },
  { id: uuidv4(), title: 'ค่าน้ำมัน', amount: 5000 },
  { id: uuidv4(), title: 'ค่าเช่าบ้าน', amount: 8000 },
  { id: uuidv4(), title: 'เงินเดือน', amount: 70000 },
  { id: uuidv4(), title: 'จ่ายค่าประกัน', amount: 300 },
  { id: uuidv4(), title: 'ค่าเดินทาง', amount: 800 }
]
function Transaction() {
  return (
    <ul>
      {data.map((item) => (
        <Item {...item} key={item.id} />
      ))}
    </ul>
  )
}

export default Transaction
