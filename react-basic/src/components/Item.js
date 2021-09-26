import PropTypes from 'prop-types'
import './Item.css'

const Item = ({ amount, title }) => {
  return (
    <li className="item">
      {title} <span> {amount}</span>
    </li>
  )
}

Item.propTypes = {
  title: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired
}

export default Item
