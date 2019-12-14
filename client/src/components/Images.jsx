import React from 'react';
import '../style.css'
import { relative } from 'path';

class Images extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      image: '',
      image2: null,
      current: null,
      toggle: false,
      side: 0,
      icons: [{name: 'magnify', toggle: false, icon: "https://fecsaksfifthproduct.s3-us-west-1.amazonaws.com/Document-in-out-look-magnifier-zoom-glass_1-512.png"}, {name: 'demagnify', toggle: true, icon: "https://fecsaksfifthproduct.s3-us-west-1.amazonaws.com/Document-in-out-look-magnifier-zoom-glass-512.png"}, {name: 'reset', toggle: true, icon: "https://fecsaksfifthproduct.s3-us-west-1.amazonaws.com/Arrow_replay_back_rewind_undo-512.png"}],
      translateValue: 0,
      transition: false,
      fade: true
    }
    this.changeUpView=this.changeUpView.bind(this)
    this.changeDownView=this.changeDownView.bind(this)
    this.updateMedia=this.updateMedia.bind(this)
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (prevState.toggle === false && nextProps.images !== prevState.image) {
      return {image: nextProps.images[0], current: nextProps.images[0]};
    }
  }

  changeUpView() {
    if (this.state.translateValue < 0) {
      this.setState({translateValue: this.state.translateValue + 117}, () => console.log('1:', this.state.image, this.state.transition, '2:', this.state.image2, this.state.transition2))
    }
  }

  changeDownView() {
    if (this.state.translateValue >= -117 * (this.props.images.length - 6)) {
      this.setState({translateValue: this.state.translateValue - 117}, () => console.log('1:', this.state.image, this.state.transition, '2:', this.state.image2, this.state.transition2))
    }
  }

  updateMedia(after, index) {
    var before=this.state.image
    if (this.state.fade === true) {
      if (after === this.state.image) {
        return
      } else {
        this.setState({image: before, image2: after, current: after, toggle: true, side: index, transition: !this.state.transition, fade: false}, () => console.log(this.state.image, this.state.image2, this.state.fade))
      }
    } else {
      if (after === this.state.image2) {
        return
      } else {
        this.setState({image: after, image2: this.state.image2, current: after, toggle: true, side: index, transition: !this.state.transition, fade: true}, () => console.log(this.state.image, this.state.image2, this.state.fade))
      }
    }
  }
  
  render() {
    return (
      <div style={{ background: "white",  opacity: `${this.props.addtobag ? "0.2" : "1"}`,  pointerEvents: `${this.props.addtobag ? "none": "auto"}`}}>
        <section style={{boxSizing: "border-box", width: "55.3333333333%", float: "right", paddingLeft: "10px", paddingRight: "10px", paddingTop: "10px", position: "relative", display: "block"}}>
          <div className="DPmedia_player_container">
            {this.state.icons[0].toggle ? <img className="DPmedia_zoom" src={this.state.current}/> : (
              this.state.image !== this.state.image2 ? (
              <div>
                <img className="DPmedia_main" src={this.state.image} style={{ position: "relative", transition: "1s", opacity: `${this.state.transition ? "0" : "1"}`}}/>
                <img className="DPmedia_main" src={this.state.image2} style={{ position: "absolute", overflow: "hidden", transition: "1s", opacity: `${this.state.transition ? "1" : "0"}`, width: "100%", height: "93%"}}/>
              </div>
            ) : <img className="DPmedia_main" src={this.state.image}/>)}
            <div className="DPside_control_container">
              {this.state.icons.map((icon, index) => (
                <img className="DPside_control_icon" key={index} src={icon.icon} onClick={() => {
                  if (icon.name === 'magnify') {
                    this.setState({icons: [{name: 'magnify', toggle: true, icon: "https://fecsaksfifthproduct.s3-us-west-1.amazonaws.com/Document-in-out-look-magnifier-zoom-glass_1-512.png"}, {name: 'demagnify', toggle: false, icon: "https://fecsaksfifthproduct.s3-us-west-1.amazonaws.com/Document-in-out-look-magnifier-zoom-glass-512.png"}, {name: 'reset', toggle: false, icon: "https://fecsaksfifthproduct.s3-us-west-1.amazonaws.com/Arrow_replay_back_rewind_undo-512.png"}]})
                  } else if (icon.name === 'demagnify' || icon.name === 'reset') {
                    this.setState({icons: [{name: 'magnify', toggle: false, icon: "https://fecsaksfifthproduct.s3-us-west-1.amazonaws.com/Document-in-out-look-magnifier-zoom-glass_1-512.png"}, {name: 'demagnify', toggle: true, icon: "https://fecsaksfifthproduct.s3-us-west-1.amazonaws.com/Document-in-out-look-magnifier-zoom-glass-512.png"}, {name: 'reset', toggle: true, icon: "https://fecsaksfifthproduct.s3-us-west-1.amazonaws.com/Arrow_replay_back_rewind_undo-512.png"}]})
                  }}} style={{opacity: `${icon.toggle ? "0.5" : "1"}`}}/>
                ))}
                  <img className="DPside_control_icon" src={"https://fecsaksfifthproduct.s3-us-west-1.amazonaws.com/full_screen-512.png"}/>,
            </div>
          </div>
          <div className="DPside_media_container">
            {this.props.images.length <= 5 ? null : (
              <img className="DParrow" src='./Miscellaneous/icons8-collapse-arrow-30.png' onClick={this.changeUpView} style={{ opacity: `${this.state.translateValue === 0 ? "0.5" : "1" }`,  cursor: `${this.state.translateValue === 0 ? "default" : "pointer"}`}}/>)}
              <div className="DPside_media" >
                {this.props.images.map((image, index) => (
                  <div className="DPside_single_container" key={index} onClick={() => this.updateMedia(image, index)} style={{ borderStyle: "solid", borderWidth: `${this.state.side === index ? '1px' : '0px'}`, borderColor: `${this.state.side === index ? 'black' : 'white'}`, transform: `translateY(${this.state.translateValue}px)`, transition: 'transform ease-out 0.55s'}}>
                    <img className="DPside_single_thumb" src={image}/>
                  </div>))}
              </div>
            {this.props.images.length <= 5 ? null : (
              <img className="DParrow" src='./Miscellaneous/icons8-expand-arrow-30.png' onClick={this.changeDownView} style={{ opacity: `${this.state.translateValue === (-117 * (this.props.images.length - 5)) ? "0.5" : "1" }`, cursor: `${this.state.translateValue === (-117 * (this.props.images.length - 5)) ? 'default' : 'pointer'}`}}/>)}
          </div>
        </section>
      </div>
    )
  }
}

export default Images