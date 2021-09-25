import './Item.css'
function Item(props) {
  const { title, amount } = props
  return (
    <li className="item">
      {title} <span>- {amount}</span>
    </li>
  )
}

export default Item
