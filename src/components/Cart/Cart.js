import { useSelector } from 'react-redux'
import Card from '../UI/Card'
import classes from './Cart.module.css'
import CartItem from './CartItem'

const Cart = (props) => {
  const cartState = useSelector(state => state.cart)

  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {cartState.items.map(item => <CartItem entry={item} key={item.item.id} />)}
      </ul>
    </Card>
  )
}

export default Cart
