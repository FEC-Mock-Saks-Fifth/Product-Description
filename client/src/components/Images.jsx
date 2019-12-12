import React from 'react';
import '../style.css'

class Images extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      image: '',
      toggle: false,
      side: '',
      magnify: false,
      demagnify: true,
      repeat: true,
      fullscreen: false,
      icons: [{name: 'magnify', toggle: false, icon: "icons/Document-in-out-look-magnifier-zoom-glass_1-512.png"}, {name: 'demagnify', toggle: true, icon: "icons/Document-in-out-look-magnifier-zoom-glass-512.png"}, {name: 'reset', toggle: true, icon: "icons/Arrow_replay_back_rewind_undo-512.png"}, {name: 'fullscreen', toggle: false, icon:"icons/full_screen-512.png"}],
      currentindex: 0,
      lastindex: 5
    }
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (prevState.toggle === false && nextProps.images !== prevState.image) {
      return {image: nextProps.images[0]};
    }
  }

  render() {
    return (
      <div style={{background: "white",opacity: `${this.props.addtobag ? "0.2" : "1"}`}}>
      <section style={{boxSizing: "border-box", width: "55.3333333333%", float: "left", paddingLeft: "10px", paddingRight: "10px", paddingTop: "10px", position: "relative", display: "block"}}>
        <div className="DPmedia_player_container">
          {this.state.icons[0].toggle === false ? (
            <img className="DPmedia_main" src={this.state.image} />
          ) : (
            <img className="DPmedia_zoom" src={this.state.image} />
          )}
        <div className="DPside_control_container">
          {this.state.icons.map((icon, index) => (
            (icon.toggle) ? (
              <img className="DPside_control_icon" style={{opacity: 0.5}} key={index} src={icon.icon}/>
            ) : (
              <img className="DPside_control_icon" key={index} src={icon.icon} onClick={() => {
                if (icon.name === 'magnify') {
                  this.setState({icons: [
                    {name: 'magnify', toggle: true, icon: "icons/Document-in-out-look-magnifier-zoom-glass_1-512.png"}, {name: 'demagnify', toggle: false, icon: "icons/Document-in-out-look-magnifier-zoom-glass-512.png"}, {name: 'reset', toggle: false, icon: "icons/Arrow_replay_back_rewind_undo-512.png"}, {name: 'fullscreen', toggle: false, icon:"icons/full_screen-512.png"}
                  ]})
                } else if (icon.name === 'demagnify' || icon.name === 'reset') {
                  this.setState({icons: [
                    {name: 'magnify', toggle: false, icon: "icons/Document-in-out-look-magnifier-zoom-glass_1-512.png"}, {name: 'demagnify', toggle: true, icon: "icons/Document-in-out-look-magnifier-zoom-glass-512.png"}, {name: 'reset', toggle: true, icon: "icons/Arrow_replay_back_rewind_undo-512.png"}, {name: 'fullscreen', toggle: false, icon:"icons/full_screen-512.png"}
                  ]})
                }}}
                />
            )))}
          </div>
        </div>


        <div className="DPside_media_container">
        {(this.props.images.length <= 5) ? (
          <div className="DPside_media">
          {this.props.images.slice(this.state.currentindex, this.state.lastindex).map((image, index) => (
            (this.state.side === index) ? (
              <div className="DPside_single_select" key={index} onClick={() => this.setState({image: image, toggle: true, side: index})}><img className="DPside_single_thumb" src={image}/></div>
            ) : (
              <div className="DPside_single_container" key={index} onClick={() => this.setState({image: image, toggle: true, side: index})}><img className="DPside_single_thumb" src={image}/></div>
            )))}
          </div>
        ) : (this.state.currentindex === 0) ? (
          <div>
          <img className="DPup_arrow" style={{opacity: 0.5}} src='/icons/Screen Shot 2019-12-08 at 10.23.36 PM.png'/>
          <div className="DPside_media">
            {this.props.images.slice(this.state.currentindex, this.state.lastindex).map((image, index) => (
              (this.state.side === index) ? (
                <div className="DPside_single_select" key={index} onClick={() => this.setState({image: image, toggle: true, side: index})}><img className="DPside_single_thumb" src={image}/></div>
              ) : (
                <div className="DPside_single_container" key={index} onClick={() => this.setState({image: image, toggle: true, side: index})}><img className="DPside_single_thumb" src={image}/></div>
              )))}
          </div>
          <img className="DPdown_arrow" src='/icons/Screen Shot 2019-12-08 at 10.23.10 PM.png' onClick={() => this.setState({currentindex: this.state.currentindex + 1, lastindex: this.state.lastindex + 1, side: this.state.side - 1})}/>
          </div>
        ) : (this.props.images[this.state.lastindex] === undefined) ? (
          <div>
          <img className="DPup_arrow" src='/icons/Screen Shot 2019-12-08 at 10.23.36 PM.png' onClick={() => this.setState({currentindex: this.state.currentindex - 1, lastindex: this.state.lastindex - 1, side: this.state.side + 1})}/>
          <div className="DPside_media">
            {this.props.images.slice(this.state.currentindex, this.state.lastindex).map((image, index) => (
              (this.state.side === index) ? (
                <div className="DPside_single_select" key={index} onClick={() => this.setState({image: image, toggle: true, side: index})}><img className="DPside_single_thumb" src={image}/></div>
              ) : (
                <div className="DPside_single_container" key={index} onClick={() => this.setState({image: image, toggle: true, side: index})}><img className="DPside_single_thumb" src={image}/></div>
              )))}
          </div>
          <img className="DPdown_arrow" style={{opacity: 0.5}} src='/icons/Screen Shot 2019-12-08 at 10.23.10 PM.png'/>
          </div>
        ) : (
          <div>
          <img className="DPup_arrow" src='/icons/Screen Shot 2019-12-08 at 10.23.36 PM.png' onClick={() => this.setState({currentindex: this.state.currentindex - 1, lastindex: this.state.lastindex - 1, side: this.state.side + 1})}/>
          <div className="DPside_media">
            {this.props.images.slice(this.state.currentindex, this.state.lastindex).map((image, index) => (
              (this.state.side === index) ? (
                <div className="DPside_single_select" key={index} onClick={() => this.setState({image: image, toggle: true, side: index})}><img className="DPside_single_thumb" src={image}/></div>
              ) : (
                <div className="DPside_single_container" key={index} onClick={() => this.setState({image: image, toggle: true, side: index})}><img className="DPside_single_thumb" src={image}/></div>
              )))}
          </div>
          <img className="DPdown_arrow" src='/icons/Screen Shot 2019-12-08 at 10.23.10 PM.png' onClick={() => this.setState({currentindex: this.state.currentindex + 1, lastindex: this.state.lastindex + 1, side: this.state.side - 1})}/>
          </div>
        )}
        </div>
      </section>
      </div>
    )
  }
}

export default Images;