import { useDispatch, useSelector } from 'react-redux'
import { UIActions } from '../store'
import classes from './CartButton.module.css'

const CartButton = (props) => {
  const dispatch = useDispatch()
  const cartState = useSelector(state => state.cart)

  const totalItems = cartState.items.reduce((acc, listing) => acc + listing.quantity, 0)

  function handleClick() {
    dispatch(UIActions.toggleIsOpen())
  }

  return (
    <button className={classes.button} onClick={handleClick}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalItems}</span>
    </button>
  )
}

export default CartButton
