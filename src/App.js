import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Cart from './components/Cart/Cart'
import Layout from './components/Layout/Layout'
import Products from './components/Shop/Products'
import Notification from './components/UI/Notification'

import { fetchCartData, sendCartData } from './components/store/cart-actions'


let isInitial = true


function App() {
  const cartState = useSelector(state => state.cart)
  const UIState = useSelector(state => state.UI)
  const { notification, cartIsOpen } = UIState

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchCartData())
  }, [dispatch])

  useEffect(() => {
    if (isInitial) {
      isInitial = false
      return
    }
    if (cartState.changed) {
      dispatch(sendCartData(cartState))
    }
  }, [cartState, dispatch])

  return (
    <>
      {notification &&
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      }
      <Layout>
        {cartIsOpen && <Cart />}
        <Products />
      </Layout>
    </>
  )
}

export default App
