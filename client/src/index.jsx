import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios'
import Fullscreen from "react-full-screen"
import Details from './components/Details.jsx'
import Images from './components/Images.jsx'
import AddtoBag from './components/AddtoBag.jsx'
import './derick-style.css'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      current: [],
      bullet: [],
      style: '',
      images: [],
      sizefit: '',
      addtobag: false,
      sizeselected: '',
      quantityselected: '',
      isFull: false,
      fullSize: ''

    }
    this.getProduct = this.getProduct.bind(this);
    this.addToBagToggle=this.addToBagToggle.bind(this);
    this.goFull=this.goFull.bind(this);
  }

  componentDidMount() {
    this.getProduct()
  }

  getProduct() {
    axios.get('/derick_product_details')
    .then(res => this.setState({
      current: res.data,
      bullet: res.data.details.bullet.split('!'),
      style: res.data.details.style,
      images: res.data.images,
      sizefit: res.data.details.size
    }, () => console.log(res.data, this.state.images)))
    .catch(err => console.log(`ERROR collecting product ${err}`))
  }

  addToBagToggle(size, quantity) {
    this.setState(
      {
        addtobag: !this.state.addtobag,
        sizeselected: size,
        quantityselected: quantity
      })
  }

  goFull (pic) {
    this.setState({isFull: true, fullSize: pic});
  }

  render() {
    return(
      <div>
        <Fullscreen enabled={this.state.isFull} onChange={isFull => this.setState({isFull})}>{this.state.isFull ? <img style={{display: "block", marginLeft: "auto", marginRight: "auto", width: "50%"}} src={this.state.fullSize} /> : null}</Fullscreen>
        <Details addToBagToggle={this.addToBagToggle} addtobag={this.state.addtobag} bullet={this.state.bullet} current={this.state.current} style={this.state.style} sizefit={this.state.sizefit}/>
        <Images goFull={this.goFull} images={this.state.images} addtobag={this.state.addtobag}/>
        <AddtoBag addToBagToggle={this.addToBagToggle} addtobag={this.state.addtobag} images={this.state.images[1] || this.state.images[0]} current={this.state.current} size={this.state.sizeselected} quantity={this.state.quantityselected}/>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('productdetail'))

