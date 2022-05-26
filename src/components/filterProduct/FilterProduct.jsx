import React from 'react'
import './filterproduct.scss'
import {filterProduct} from '../../store/slice/productSlice'; 
import {useDispatch} from 'react-redux'
const FilterProduct = () => {
  const dispatch = useDispatch();   
  const handleFilterColor = (value)=>{
      dispatch(filterProduct({type:'color',value}))
  }
  const handleFilterPrice = (value) => {
      dispatch(filterProduct({type:'price',value}))
  }

  return (
    <div className='filter-product-container'>
          <div className='filter-product-type'>
            <div>
                <label for="colors">Color:</label>
                <select onChange={e=>handleFilterColor(e.target.value)} id='colors'>
                      <option value="MyColor" >My Color</option>
                      <option>white</option>
                      <option>blue</option>
                      <option>gray</option>
                      <option>red</option>
                </select>
            </div>
            <div>
                <label for="Price">Price:</label>
                <select onChange={e =>handleFilterPrice(e.target.value)}>
                      <option value="MyPrice" >My Price</option>
                      <option>expensive</option>
                      <option>cheap</option>
                </select>
            </div>
        </div>
    </div>
  )
}

export default FilterProduct