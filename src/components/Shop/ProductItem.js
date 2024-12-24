import { useDispatch } from 'react-redux'
import Card from '../UI/Card'
import classes from './ProductItem.module.css'
import { cartActions } from '../store'


const ProductItem = (props) => {

  const { title, price, description, id } = props

  const dispatch = useDispatch()

  // DATA TRANSFORMATION COMPONENT-SIDE
  // const addToCartHandler = () => {

  //   const updatedListings = cart.items.slice()
  //   const existingListing = updatedListings.find(listing => listing.item.id === id)
  //   if (existingListing) {
  //     const updatedListing = { ...existingListing }
  //     updatedListing.quantity += 1
  //     const existingListingIndex = updatedListings.findIndex(listing => listing.item.id === id)

  //     updatedListings[existingListingIndex] = updatedListing
  //     console.log(cart)

  //   } else {
  //     updatedListings.push({
  //       item: PRODUCT_DATA.find(item => item.id === id),
  //       quantity: 1
  //     })
  //     console.log(cart)
  //   }

  //   const newCart = {
  //     items: updatedListings
  //   }

  //   dispatch(cartActions.replaceCart(newCart))
  // }



  // SYNCHRONOUS REDUX HANDLER
  function handleClick() {
    dispatch(cartActions.addItem(id))
  }

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={handleClick}>Add to Cart</button>
        </div>
      </Card>
    </li>
  )
}

export default ProductItem
