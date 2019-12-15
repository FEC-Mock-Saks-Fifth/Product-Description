import React from 'react';

const AddtoBag = (props) => (
  <div className="DPmini_cart">
    <div style={{ display: "block", width: "320px", height: "100%", position: "absolute", right: "0px", top: "0px", zIndex: 19, transition: "all 0.5s", transitionTimingFunction: "linear", overflow: "hidden", opacity: `${props.addtobag ? "1" : "0"}`, maxWidth: `${props.addtobag ? "100%" : "0"}`, padding: `${props.addtobag ? "15px" : "0 15px"}`, background: 'white', marginLeft: "100%"}}>
      <div className="DPcartheader_middle">
      <img className="DPsize_is_addimage" onClick={() => props.addToBagToggle()} src="https://fecsaksfifthproduct.s3-us-west-1.amazonaws.com/Screen+Shot+2019-12-12+at+11.12.40+AM.png"/><span className="DPgothamPro" style={{fontWeight: "800"}}>Shopping Bag</span></div>
      <div className="DPcart_subtotal">Estimated Total <span className="DPfloatright">${props.current.price}.00</span></div>
      <button className="DPadd_button">Checkout</button>
        <div className="DPcartItem_container">
          <img className="DPcartItem_image" src={props.images}/>
          <div className="DPgothamPro" style={{fontSize: "12px"}}>
            <div className="DPcartItem_spacing">{props.current.brand}</div>
            <div className="DPcartItem_spacing">{props.current.product_name}</div>
            <div className="DPcartItem_spacing">${props.current.price}.00</div><br></br>
            <div className="DPcartItem_spacing">Size: {props.size}</div>
            <div className="DPcartItem_spacing">Color: {props.current.color}</div>
            <div className="DPcartItem_spacing">Quantity: {props.quantity}</div>
          </div>
       </div>
    </div>
  </div>
)
export default AddtoBag;