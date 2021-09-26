import Item from './Item'
import indexContext from '../contexts/indexContext'

function Transaction({ items }) {
  return (
    <>
      <indexContext.Consumer>{(value) => <p>{value}</p>}</indexContext.Consumer>
      <ul className="list-group">
        {items.map((item) => (
          <Item {...item} key={item.id} />
        ))}
      </ul>
    </>
  )
}

export default Transaction
