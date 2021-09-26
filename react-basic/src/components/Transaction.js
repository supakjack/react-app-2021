import Item from './Item'
import indexContext from '../contexts/indexContext'
import { useContext } from 'react'

const Transaction = ({ items }) => {
  return (
    <ul className="list-group">
      {items.map((item) => (
        <Item {...item} key={item.id} />
      ))}
    </ul>
  )
}

export default Transaction
