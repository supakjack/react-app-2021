import Item from './Item'

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
