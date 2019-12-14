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

        <section style={{
          boxSizing: "border-box",
          width: "44%",
          float: "right",
          paddingLeft: "10px",
          paddingRight: "220px",
          maxWidth: "1050px",
          background: "white",
          opacity: `${this.state.addtobag ? "0.2" : "1"}`,
          pointerEvents: `${this.props.addtobag ? "none": "auto"}`
        }}>
          <div>
            <div className="DPgothamPro DPbrand" >{this.props.current.brand}</div>
            <div className="DPhelvetica DPproduct_name">{this.props.current.product_name}</div>
          </div>
  
          <section className="DPproduct_section">

              <dl className="DPgothamPro DPcolor_size" >
                <dt className="DPgothamPro DPproduct_name" style={{float: "left"}}>Color - </dt>
                <dd className="DPhelvetica DPproduct_name" style={{color: "#777", "marginLeft":"4px", float:"left"}}>{this.props.current.color}</dd>
              </dl><br></br>
  
              <dl className="DPgothamPro DPcolor_size" >
                <dt className="DPgothamPro DPproduct_name">Size - <span className="DPhelvetica DPproduct_name" style={{color:"#777", "marginLeft":"4px"}}>{this.state.size}</span><a className="DPsize_guide" target="_blank" href="https://www.saksfifthavenue.com/html/popups/m_sizechart.jsp?PRODUCT%3C%3Eprd_id=845524447374804#125">Size Guide</a></dt>
              </dl>

              <FitPredictor />

              <div className="DPcolor_size">
                {this.props.current.size.map((size, index) => (
                  (index === this.state.sizetoggle) ? (
                    <div className="DPgothamPro DPsize_value" style={{border: "1.5px solid black"}} key={index} onClick={() => this.setState({size: size.toUpperCase(), sizetoggle: index})}>{size}</div>
                  ) : (
                    <div className="DPgothamPro DPsize_value" key={index} onClick={() => this.setState({size: size.toUpperCase(), sizetoggle: index})}>{size}</div>
                )))}
              </div>
                {this.state.sizetoggle !== null ? (
                  <div style={{"marginTop": "18px", "marginBottom": "6px"}}>
                    <p className="DPgothamPro" style={{"fontSize": "0.75rem", "fontWeight": "bold"}}>Pre-Order</p>
                    <p className="DPgothamPro" style={{"fontSize": "0.5rem", "marginTop": "-10px"}}>Expected ship date no later than: {`${new Date().getUTCMonth()+4}/${new Date().getUTCDate()}/${new Date().getUTCFullYear()}`}</p>
                  </div>) : null }<br></br>

              <div className="DPhelvetica" style={{"fontSize": "18px", "lineHeight": "18px"}}>${this.props.current.price}.00</div>
  
            <div style={{"paddingBottom": "0.75rem"}}>
              <span className="DPgothamNarrow DPsaks_earn">Earn at least <span style={{color: "#bd935d"}}>{this.props.current.price * 2}</span> points with the SaksFirst Card</span>
            </div>
  
            <div className="DPquantity_container">
              {this.state.quantity === 1 ? <button className="DPbutton DPproduct_name" style={{"backgroundColor": "#f6f6f6", "borderColor": "#ccc", "color": "#aaa"}}>-</button> : <button className="DPbutton DPproduct_name" onClick ={() => this.setState({quantity: Number(this.state.quantity) - 1})}>-</button>}
              <input className="DPquantity_input DPproduct_name DPhelvetica" value={this.state.quantity} onChange={(e) => this.setState({quantity: e.target.value})}></input>
              <button className="DPbutton" onClick={() => this.setState({quantity: Number(this.state.quantity) + 1})}>+</button>
            </div><br></br>
  
            <div style={{"marginTop": "35px"}} onClick={() => this.props.addToBagToggle(this.state.size, this.state.quantity)}>
              <button className="DPadd_button" onClick={() => this.setState({addtobag: !this.state.addtobag})}>ADD TO BAG</button>
            </div>
              <div style={{"marginTop": "15px", "marginBottom": "30px"}}>
                <button className="DPgift_button"><img className="default" src="https://static.loopassets.net/store/saksfifthavenue/images/ribbon-static.svg" style={{height: "0.9rem", border: "1px solid #000"}}/> 
                <span className="DPgothamNarrow DPgift_name">GIFTNOW®</span><span className="DPgothamNarrow DPgift_name1">Gifting Made Easy.</span></button>
              </div>
  
            <img src="https://fecsaksfifthproduct.s3-us-west-1.amazonaws.com/Screen+Shot+2019-12-08+at+5.22.33+PM.png" style={{float: "left", height: "1.25rem", width: "1.25rem"}}/>
            <div className="DPgothamNarrow DPshoprunner">
              <strong>SHOPRUNNER FREE 2-Day Shipping & Free Returns</strong><br></br><span style={{cursor: "pointer", "textDecoration": "underline"}}>Learn More</span><span> | </span><span style={{cursor: "pointer", "textDecoration": "underline"}}>Sign In</span>
            </div>
          </section>

         <ProductDropdown bullet={this.props.current.details.bullet.split('!')} style={this.props.current.details.style} head={this.props.current.details.head} sizefit={this.props.current.details.size}/>
         
        </section>
    )
  }}
}

export default Details;
