import PropTypes from 'prop-types'

const Item = ({ amount, title }) => {
  const status = amount > 0 ? 'bg-success' : 'bg-danger'
  return (
    <li className="list-group-item d-flex justify-content-between">
      <span>{title}</span>
      <span className={`badge rounded-pill ${status}`}>{amount}</span>
    </li>
  )
}

Item.propTypes = {
  title: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired
}

export default Item
