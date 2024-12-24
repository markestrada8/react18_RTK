import { useDispatch } from 'react-redux'
import classes from './CartItem.module.css'
import { cartActions } from '../store'

const CartItem = ({ entry }) => {
  const { title, price, id } = entry.item

  const dispatch = useDispatch()

  function handleIncrement() {
    dispatch(cartActions.increaseQuantity(id))
  }

  function handleDecrement() {
    dispatch(cartActions.decreaseQuantity(id))
  }

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${(entry.quantity * price).toFixed(2)}{' '}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{entry.quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={handleDecrement}>-</button>
          <button onClick={handleIncrement}>+</button>
        </div>
      </div>
    </li>
  )
}

export default CartItem
