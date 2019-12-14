import React from 'react';

class ProductDropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      open1: false,
      toggle: false,
      toggle1: false
    }
  }
  
  render() {
    return (
      <section className="DPprod_drop_info">
        <div className="DPprod_drop_panel">

          <a style={{
            display: "block",
            padding: "17px 0",
            position: "relative",
            fontFamily: "Helvetica Neue, Helvetica, Arial, Sans-Serif",
            fontWeight: "500",
            fontSize: "14px",
            lineHeight: "18px",
            cursor: "pointer",
            borderBottom: `${this.state.toggle ? "none" : "1px solid #ccc"}`,
          }} onClick={() => this.setState({ open: !this.state.open,  toggle: !this.state.toggle})}>
            Details
            {this.state.open ? <span className="DPprod_drop_icon">-</span> : <span className="DPprod_drop_icon">+</span>}
          </a>

          <div style={{
            overflow: "hidden",
            height: "auto",
            transition: "0.5s",
            transitionTimingFunction: "ease",
            opacity: `${this.state.open ? "1" : "0"}`,
            maxHeight: `${this.state.open ? "100%" : "0"}`,
            padding: `${this.state.open ? "15px" : "0 15px"}`,
            borderBottom: "1px solid #ccc"
          }}>
          
          {this.props.head}
            {this.props.bullet.map((bullet, index) => 
            <li key={index}>{bullet}</li>
            )}
            <a className="DPprod_drop_sizefit">SIZE & FIT</a>
            {this.props.sizefit.includes('!') ? (
              this.props.sizefit.split('!').map((bullet, index) => (
                <li key={index}>{bullet}</li>
              )
            )) : (
              <li>{this.props.sizefit}</li>
            )}
            <div className="DPprod_drop_style">Style Code: {this.props.style}</div>
          </div>


          <a style={{
            display: "block",
            padding: "17px 0",
            position: "relative",
            fontFamily: "Helvetica Neue, Helvetica, Arial, Sans-Serif",
            fontWeight: "500",
            fontSize: "14px",
            lineHeight: "18px",
            cursor: "pointer",
            borderBottom: `${this.state.toggle1 ? "none" : "1px solid #ccc"}`,
          }} onClick={() => this.setState({ open1: !this.state.open1, toggle1: !this.state.toggle1})}>
            Shipping & Returns
            {this.state.open1 ? <span className="DPprod_drop_icon">-</span> : <span className="DPprod_drop_icon">+</span>}
          </a>

          <div style={{
            overflow: "hidden",
            height: "auto",
            transition: "0.5s",
            transitionTimingFunction: "linear",
            opacity: `${this.state.open1 ? "1" : "0"}`,
            maxHeight: `${this.state.open1 ? "100%" : "0"}`,
            padding: `${this.state.open1 ? "15px" : "0 15px"}`,
            borderBottom: "1px solid #ccc"
          }}>

            If for any reason you are not completely satisfied with your purchase, you may return the item(s) free of charge to any Saks Fifth Avenue store for an exchange or refund.<br></br>
            <a href="https://www.saksfifthavenue.com/Shipping-Returns-Taxes">Details</a>
          </div>
        </div>
      </section>
    )
  }
}

export default ProductDropdown;