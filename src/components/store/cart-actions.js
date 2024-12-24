import { cartActions, UIActions } from '.'

export const fetchCartData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch('https://react-rtk-demo-default-rtdb.firebaseio.com/cart.json')

      if (!response.ok) {
        throw new Error('Error fetching data!')
      }

      const data = await response.json()
      return data
    }

    try {
      const cartData = await fetchData()
      dispatch(cartActions.replaceCart({
        ...cartData,
        items: cartData.items || [],
      }))
    } catch (error) {
      dispatch(UIActions.showNotification({
        status: 'error',
        title: 'Error!',
        message: error.message
      }))
    }
  }
}

export const sendCartData = (cartData) => {
  return async (dispatch) => {
    dispatch(UIActions.showNotification({
      status: 'pending',
      title: 'Sending...',
      message: 'Sending cart data!'
    }))

    const sendRequest = async () => {
      const response = await fetch('https://react-rtk-demo-default-rtdb.firebaseio.com/cart.json',
        {
          method: 'PUT',
          body: JSON.stringify(cartData)
        }
      )

      if (!response.ok) {
        throw new Error('Error sending cart data')
      }
    }
    try {
      const response = await sendRequest()
      dispatch(UIActions.showNotification({
        status: 'success',
        title: 'Success!',
        message: 'Data sent successfully!'
      }))

    } catch (error) {
      dispatch(UIActions.showNotification({
        status: 'error',
        title: 'Error!',
        message: error.message
      }))
    }
  }
}