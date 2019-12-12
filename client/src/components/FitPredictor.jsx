import React from 'react';

class FitPredictor extends React.Component {
  constructor() {
    super ();
    this.state = {
      itemrunstrue: false,
      select: 0,
      sizeselected: ''
    }
  }
  render() {
    return (
      <div>
        {this.state.itemrunstrue ? (
              <div className="DPitem_run_true">
                <div onClick={() => this.setState({itemrunstrue: false})}>
                  <img className="DPitem_run_logo" src="https://i.redd.it/x2f9woswyrv11.png"/>
                  <span className="DPitem_run_font">Fit Predictor </span>
                  <span className="DPitem_run_calculate">Calculate Your Size</span>
                </div>

                {this.state.select === 3 ? (
                  <div className="DPsize_is_container">
                    <img className="DPsize_is_image" onClick={() => this.setState({itemrunstrue: false})} src="/icons/iconmonstr-x-mark-thin.svg"/>
                    <span className="DPsize_is_span">Based on your past purchases, </span><br></br>
                    <span className="DPsize_is_span">in this item we think you are size</span><br></br><br></br><br></br>
                    <div className="DPsize_is_middle_bold">{this.state.sizeselected}</div>
                    <div className="DPsize_is_bottom">
                      <img className="DPsize_is_question" src="icons/help-round-button.svg" />
                      <div>2/2</div>
                      <button className="DPsize_is_container_button">NEXT</button>
                    </div>
                  </div>
                ) : (
                  <div className="DPsize_is_container">
                    <img className="DPsize_is_image" onClick={() => this.setState({itemrunstrue: false})} src="/icons/iconmonstr-x-mark-thin.svg"/>
                    <div className="DPsize_is_middle">My size is:</div>
                    <select className="DPsize_is_select" onChange={() => this.setState({select: this.state.select + 1})}><option className="DPsize_is_option">Select a similar designer that fits you</option><option className="DPsize_is_option">Alexander McQueen</option><option className="DPsize_is_option">Burberry</option><option className="DPsize_is_option">Comme des Garcons</option><option className="DPsize_is_option">Diesel</option><option className="DPsize_is_option">Dsquared2</option><option className="DPsize_is_option">Emporio Armani</option><option className="DPsize_is_option">Fendi</option><option className="DPsize_is_option">Givenchy</option><option className="DPsize_is_option">Kenzo</option><option className="DPsize_is_option">Marcelo Burlon County of Milan</option></select>
                    <select className="DPsize_is_select" onChange={() => this.setState({select: this.state.select + 1})}><option className="DPsize_is_option">Select a category</option><option className="DPsize_is_option">Hoodies</option><option>Pollos</option><option className="DPsize_is_option">T-Shirts</option><option className="DPsize_is_option">Sweaters</option><option className="DPsize_is_option">Outerwear</option><option className="DPsize_is_option">Shirts</option><option className="DPsize_is_option">Vests</option></select>
                    <select className="DPsize_is_select" onChange={(e) => this.setState({select: this.state.select + 1, sizeselected: e.target.value})}><option className="DPsize_is_option">Select your size</option><option className="DPsize_is_option">XS</option><option className="DPsize_is_option">S</option><option className="DPsize_is_option">M</option><option className="DPsize_is_option">L</option><option className="DPsize_is_option">XL</option><option className="DPsize_is_option">XXL</option><option className="DPsize_is_option">XXXL</option></select>
                    <div className="DPsize_is_middle">1/2</div>
                  </div>
                )}
              </div>
            ) : (
              <div className="DPitem_run_true" onClick={() => this.setState({itemrunstrue: true})}>
                <img className="DPitem_run_logo" src="https://i.redd.it/x2f9woswyrv11.png"/>
                <span className="DPitem_run_font">Fit Predictor </span>
                <span className="DPitem_run_calculate">Calculate Your Size</span>
              </div>
            )}  
      </div>
    )
  }
}

export default FitPredictor;