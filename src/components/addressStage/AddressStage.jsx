import React from 'react'
import './addressStage.scss'
const AddressStage = ({checkoutStep,addressStep}) => {
  return (
      <div className="address-stage">
          <div>
              <span id={addressStep === "address" ? "checkout-pass" : ""}>1</span>
              <span>Cart</span>
          </div>
          <div className="address-line"></div>
          <div>
              <span id={checkoutStep === 'payment' ? "checkout-pass":""}>2</span>
              <span>Address</span>
          </div>
          <div className="address-line"></div>
          <div>
              <span>3</span>
              <span>Payment</span>
          </div>
      </div>
  )
}

export default AddressStage