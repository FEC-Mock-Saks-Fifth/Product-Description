import React from 'react';
import ProductDropdown from './ProductDropdown.jsx';
import FitPredictor from './FitPredictor.jsx';

class Details extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      quantity: 1,
      size: null,
      sizetoggle: null,
      detail: false,
      shipping: false,
      addtobag: false
    }
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (prevState.addtobag === true && nextProps.addtobag !== prevState.addtobag) {
      return {addtobag: nextProps.addtobag};
    }
  }
  

  render() {
    if (this.props.current.length === 0) {
      return null;
    } else {
      return (

        <section style={{ boxSizing: "border-box", width: "44%", float: "right", paddingLeft: "10px", paddingRight: "220px", maxWidth: "1050px", background: "white", opacity: `${this.state.addtobag ? "0.2" : "1"}`, pointerEvents: `${this.props.addtobag ? "none": "auto"}`}}>
         <div>
            <div className="DPgothamPro DPbrand" >{this.props.current.brand}</div>
            <div className="DPhelvetica DPproduct_name">{this.props.current.product_name}</div>
          </div>
  
          <section className="DPproduct_section">
              <dl className="DPgothamPro DPcolor_size" >
                <dt className="DPgothamPro DPproduct_name DPfloatleft" >Color - </dt>
                <dd className="DPhelvetica DPproduct_name DPproduct_color DPfloatleft">{this.props.current.color}</dd>
              </dl><br></br>
              <dl className="DPgothamPro DPcolor_size" >
                <dt className="DPgothamPro DPproduct_name">Size - <span className="DPhelvetica DPproduct_name DPproduct_color">{this.state.size}</span><a className="DPsize_guide" target="_blank" href="https://www.saksfifthavenue.com/html/popups/m_sizechart.jsp?PRODUCT%3C%3Eprd_id=845524447374804#125">Size Guide</a></dt>
              </dl>
              
              <FitPredictor />

              <div className="DPcolor_size">
                {this.props.current.size.map((size, index) => (
                  (index === this.state.sizetoggle) ? (
                  <div className="DPgothamPro DPsize_value DPproduct_border" key={index} onClick={() => this.setState({size: size.toUpperCase(), sizetoggle: index})}>{size}</div>
                  ) : (  
                  <div className="DPgothamPro DPsize_value" key={index} onClick={() => this.setState({size: size.toUpperCase(), sizetoggle: index})}>{size}</div>
                )))}
              </div>
                {this.state.sizetoggle !== null ? (
                  <div className="DPproduct_shipping_margin">
                    <p className="DPgothamPro DPproduct_preorder_font">Pre-Order</p>
                    <p className="DPgothamPro DPproduct_shipping_font">Expected ship date no later than: {`${new Date().getUTCMonth()+4}/${new Date().getUTCDate()}/${new Date().getUTCFullYear()}`}</p>
                  </div>) : null }<br></br>

              <div className="DPhelvetica DPproduct_price_font">${this.props.current.price}.00</div>
  
            <div className="DPproduct_earn_container">
              <span className="DPgothamNarrow DPsaks_earn">Earn at least <span className="DPproduct_earn_color">{this.props.current.price * 2}</span> points with the SaksFirst Card</span>
            </div>
  

            <div className="DPquantity_container">
              {this.state.quantity === 1 ? <button className="DPbutton DPproduct_name DPproduct_button">-</button> : <button className="DPbutton DPproduct_name" onClick ={() => this.setState({quantity: Number(this.state.quantity) - 1})}>-</button>}
              <input className="DPquantity_input DPproduct_name DPhelvetica" value={this.state.quantity} onChange={(e) => this.setState({quantity: e.target.value})}></input>
              <button className="DPbutton" onClick={() => this.setState({quantity: Number(this.state.quantity) + 1})}>+</button>
            </div><br></br>
  

            <div className="DPproduct_addbutton_container" onClick={() => this.props.addToBagToggle(this.state.size, this.state.quantity)}>
              <button className="DPadd_button" onClick={() => this.setState({addtobag: !this.state.addtobag})}>ADD TO BAG</button>
            </div>
            <div className="DPproduct_giftbutton_container">
              <button className="DPproduct_gift_button"><img className="DPproduct_gift_image" src="https://static.loopassets.net/store/saksfifthavenue/images/ribbon-static.svg"/> 
              <span className="DPgothamNarrow DPgift_name">GIFTNOW®</span><span className="DPgothamNarrow DPgift_name1">Gifting Made Easy.</span></button>
            </div>  
            <img className="DPproduct_shoprunner_image" src="https://fecsaksfifthproduct.s3-us-west-1.amazonaws.com/Screen+Shot+2019-12-08+at+5.22.33+PM.png"/>
            <div className="DPgothamNarrow DPshoprunner">
              <strong>SHOPRUNNER FREE 2-Day Shipping & Free Returns</strong><br></br><span className="DPproduct_shoprunner_learn">Learn More</span><span> | </span><span className="DPproduct_shoprunner_learn">Sign In</span>
            </div>
          </section>

         <ProductDropdown bullet={this.props.current.details.bullet.split('!')} style={this.props.current.details.style} head={this.props.current.details.head} sizefit={this.props.current.details.size}/>
         
        </section>
    )
  }}
}

export default Details;
