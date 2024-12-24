import { PRODUCT_DATA } from '../../data'
import ProductItem from './ProductItem'
import classes from './Products.module.css'

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {PRODUCT_DATA.map(item => <ProductItem {...item} key={item.id} />)}
      </ul>
    </section>
  )
}

export default Products
{/* <ProductItem
id={1}
title='Test'
price={6}
description='This is a first product - amazing!'
/> */}