import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios'
import Details from './components/Details.jsx'
import Images from './components/Images.jsx'
import AddtoBag from './components/AddtoBag.jsx'
import './style.css'

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
      quantityselected: ''

    }
    this.getProduct = this.getProduct.bind(this)
    this.addToBagToggle=this.addToBagToggle.bind(this)
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

  componentDidMount() {
    this.getProduct()
  }

  render() {
    return(
      <div >
        <Details addToBagToggle={this.addToBagToggle} addtobag={this.state.addtobag} bullet={this.state.bullet} current={this.state.current} style={this.state.style} sizefit={this.state.sizefit}/>
        <Images images={this.state.images} addtobag={this.state.addtobag}/>
        <AddtoBag addToBagToggle={this.addToBagToggle} addtobag={this.state.addtobag} images={this.state.images[1]} current={this.state.current} size={this.state.sizeselected} quantity={this.state.quantityselected}/>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('productdetail'))