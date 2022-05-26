import {React,useEffect, useState} from 'react'
import './singleProduct.scss'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useNavigate,useLocation } from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux';
import {fetchSingleProduct} from '../../store/slice/productSlice'; 
import {addToCart} from '../../store/slice/cartSlice'; 

const SingleProduct = () => {
  const navigate = useNavigate(); 
  const location = useLocation(); 
  const productId = location.pathname.split('/')[2]; 
  const {singleProducts,isFetching} = useSelector(state=>state.product)
  const dispatch = useDispatch();
  const [quantityCart,setQuantityCart] = useState(1); 
  const [size,setSize] = useState(singleProducts.size && singleProducts.size[0]);
  const [color,setColor] = useState(singleProducts.color && singleProducts.color[0]);  
  const [indexSize,setIndexSize] = useState(0); 
  
  const handleQuantityClick = (type)=>{
      if(type==="decrement"){
        quantityCart > 1 && setQuantityCart(quantityCart => quantityCart - 1) 
      }else{
        setQuantityCart(quantityCart=>quantityCart + 1); 
      }
  }
  const handleSizeClick =(index,type)=>{
        setSize(type)
        setIndexSize(index);
  }
  // const handleColorClick = (index,type)=>{
  //       setColor(type)
  //       setIndexColor(index); 
  // }
 
  const handleAddToCart = () => {
    const product = {
      _id:singleProducts._id,
      name: singleProducts.name,
      desc: singleProducts.desc,
      image:singleProducts.image,
      color : color || singleProducts.color[0],
      size :  size || singleProducts.size[0],
      price: singleProducts.price,
      quantity:quantityCart
    }   
     dispatch(addToCart(product))
     navigate("/cart")
  }

  useEffect(()=>{     
      dispatch(fetchSingleProduct(productId)); 
  },[dispatch,productId])

  return (
    <div className='single-product-container'>  
        {
        isFetching ? <div style={{textAlign:"center"}}>Loading...</div> : <div className="single-product-wraper">
          <img src={singleProducts.image && singleProducts.image[0]} alt="" />
          <div className='single-product-info'>
            <h2 className='single-product-name'>{singleProducts.name}</h2>
            <span className='single-product-description'>{singleProducts.desc}</span>
            <span className='single-product-price'>Price:<b>{singleProducts.price}$</b></span>
            <div className='single-product-color'>
              <label for="color">Color:</label>
              <select onChange={(e)=>setColor(e.target.value)} id='color'>
              {singleProducts.color && singleProducts.color.map((item, index) => {
                return <option>{item}</option>
              })}
              </select>
              <div style={{backgroundColor:`${color}`}} className='sing-product-color-select'></div>
            </div>
            <div className='single-product-size'>
              <span>Size</span>
              {singleProducts.size && singleProducts.size.map((item, index) => {
                return <div className={index === indexSize ? 'single-product-size-click' : ''} onClick={() => handleSizeClick(index, item)} key={item}>{item}</div>
              })}
            </div>
            <div className='single-product-quantity'>
              <div onClick={() => handleQuantityClick("decrement")}><RemoveIcon /></div>
              <div>{quantityCart}</div>
              <div onClick={() => handleQuantityClick("increment")}><AddIcon /></div>
            </div>
            <button onClick={handleAddToCart}>Add To Cart</button>
          </div>

        </div>
        } 
       
    </div>
  )
}

export default SingleProduct