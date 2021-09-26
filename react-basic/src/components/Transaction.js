import Item from './Item'

function Transaction({ items }) {
  return (
    <ul>
      {items.map((item) => (
        <Item {...item} key={item.id} />
      ))}
    </ul>
  )
}

export default Transaction
