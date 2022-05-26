import {React} from 'react'
import './payment.scss'
import AddressStage from '../../components/addressStage/AddressStage'
import PaypalCheckoutButton from '../../components/paypalCheckoutButton/PaypalCheckoutButton'
import {useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
const Payment = () => {
  const {products,total} = useSelector(state=>state.cart);  
  const {addressUser} = useSelector(state=>state.address); 
  const {user} = useSelector (state=>state.user);  
  const navigate = useNavigate(); 
  if(!user){
    navigate('/login'); 
  }
  if (products === []){
    navigate('/')
  }
  if (addressUser.phone === "" || addressUser.address === "" || addressUser.city === ""){
    navigate('/address'); 
  }
  return (
    <div className='payment-container'>
            <AddressStage addressStep="address" checkoutStep="payment"/>
        <div className="payment-wraper">
            <div>
                <div className='payment-list-order'>
                      {products.map(item=>{
                        return <div className='payment-list-product'>
                            <img alt='' src={item.image} />
                            <div className='payment-list-info'>
                                <h1>{item.name}</h1>
                                <span className='payment-list-info-des'>{item.desc}</span>
                                <span>Price : <b>{item.price}$</b></span>
                                <span>Quantity: x{item.quantity}</span>
                                <div className='payment-list-info-tail'>
                                        <div style={{backgroundColor:`${item.color}`}} className='payment-list-info-color'></div>
                                        <div className='payment-list-total'>total:{item.quantity*item.price}$</div>
                                </div>
                            </div>
                        </div>  
                      })}                   
                     
                </div>
                <div className='payment-sumary-payment'>                       
                      <span className='payment-sumary-payment-title'>Sumary Payment</span>
                    <div>
                        <ul>
                            <li>Address:{addressUser.address}</li>
                            <li>Phone:{addressUser.phone}</li>
                            <li>City:{addressUser.city}</li>
                        </ul>
                    </div>
                      <span className='payment-sumary-payment-total'>Total Pay: {total}$</span>
                      <div className='paypal-button-checkout'>
                            <PaypalCheckoutButton user = {user} addressUser = {addressUser} products={products} totalPay={total} />
                      </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Payment