import {React,useEffect} from 'react'
import './productList.scss'
import Product from '../product/Product'
import { fetchProducts } from '../../store/slice/productSlice';
import { useDispatch, useSelector } from 'react-redux'
const ProductList = () => {
  const dispatch = useDispatch();
  const {listProducts} = useSelector(state => state.product); 
  useEffect(()=>{
    dispatch(fetchProducts()); 
  },[dispatch])
  return (
    <div  className='product-list-container' id='product'>
       {listProducts && listProducts.map(item=>{
         return <Product key={item._id} item={item} />
       })}
    </div>
  )
}

export default ProductList