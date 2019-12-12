import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios'
import Details from './components/Details.jsx'
import Images from './components/Images.jsx'
import './style.css'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      current: [],
      bullet: [],
      style: '',
      images: [],
      sizefit: ''
    }
    this.getProduct = this.getProduct.bind(this)
  }

  getProduct() {
    axios.get('/product')
    .then(res => this.setState({
      current: res.data,
      bullet: res.data.details.bullet.split('!'),
      style: res.data.details.style,
      images: res.data.images,
      sizefit: res.data.details.size
    }, () => console.log(res.data)))
    .catch(err => console.log(`ERROR collecting product ${err}`))
  }

  componentDidMount() {
    this.getProduct()
  }

  render() {
    return(
      <div>
        <Details bullet={this.state.bullet} current={this.state.current} style={this.state.style} sizefit={this.state.sizefit}/>
        <Images images={this.state.images}/>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))