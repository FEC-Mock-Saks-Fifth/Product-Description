import React from 'react';
import styled from 'styled-components';
import '../style.css'


const MediaFramework = styled.section`
box-sizing: border-box;
width: 55.3333333333%;
float: right;
padding-left: 10px;
padding-right: 10px;
padding-top: 10px;
position: relative;
display: block;
`;

const Heart = styled.img`
position: absolute;
top: 12px;
right: 27px;
width: 30px;
height: 30px;
cursor: pointer;
z-index: 1;
`;

{/* <div id="favorite-0400011905182" data-product="0400011905182" data-url="https://www.saksfifthavenue.com/thom-browne-striped-sleeve-hoodie/product/0400011905182" data-image="https://image.s5a.com/is/image/saks/0400011905182" data-favoriteable="true" class="favorite-toggle product__favorite" data-reactid="5"><span data-reactroot="" class="favorite_icon favorite_icon--hover" aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 -10 532 532"><path d="M375,32.6c-87.2,0-119.1,73.9-119.1,73.9s-31.8-73.9-119-73.9S1,105.2,1,163.3s27.1,153.3,255, 316c227.9-162.7,255-257.9,255-316S462.2,32.6,375,32.6Z" stroke-width="1" stroke-linecap="butt" vector-effect="non-scaling-stroke"></path></svg></span></div> */}

const MediaPlayer = styled.div`
float: right;
display: block;
position: relative;
width: 65%;
height: 65%
min-height: 600px;
margin-bottom: 20px;
overflow: hidden;
color: #000;
`;
// height: 600px;

const MainMediaWrapper = styled.div`
transition: opacity 5s linear
`;

const MainMedia = styled.img`
position: relative;
left: 0px;
top: 0px;
width: 100%;
height: 100%;
border: 0px !important;
margin: 0px !important;
padding: 0px !important;
max-width: none !important;
max-height: none !important;
`;

const MainMediaZoom = styled.img`
position: relative;
left: 0px;
top: 0px;
width: 100%;
height: 100%;
border: 0px !important;
margin: 0px !important;
padding: 0px !important;
max-width: none !important;
max-height: none !important;
-moz-transform: scale(2);
-webkit-transform: scale(2);
transform: scale(2);
`;

const ControlBarContainer = styled.div`
position: relative;
margin-top: 18px;
margin-left: 10px;
float: left;
`;

const SingleControlIcon = styled.img`
width: 25px;
height: 25px;
margin-right: 20px;
cursor: pointer;
`

const SingleControlIconBlur = styled.img`
width: 25px;
height: 25px;
margin-right: 20px;
opacity: 0.5;
`


const SideMediaContainer = styled.div`
width: 100px;
height: 656px;
position: absolute;
top: 7px;
left: 185px;
border: 1px;
background: transparent;
`;

const SideMedia = styled.div`
width: 76px;
height: 585px;
position: absolute;
left: 0px;
top: 0px;
overflow: hidden;
`;

const SideSingleContainer = styled.div`
margin: 0px;
position: relative;
left: 0px;
top: 9px;
margin-top: 15px;
display: block;
`;

const SideSingleSelect = styled.div`
margin: 0px;
position: relative;
left: 0px;
top: 9px;
margin-top: 15px;
display: block;
border: 1px;
border-style: solid;
border-color: black;
`;


const SideSingleThumb = styled.img`
background-repeat: no-repeat;
background-position: center center;
width: 70px;
height: 90px;
margin-left: 2px;
margin-right: 2px;
height: auto;
transition: all 0.5s;
transition-timing-function: linear
opacity: ${props => (props.open ? "0" : "1")}
max-height: ${props => (props.open ? "0" : "100%")}
padding: ${props => (props.open ? "0 0 10px" : "0")}
`;

const SideSingleOverlay = styled.div`
width: 100%;
height: 100%;
`;

const UpArrow = styled.img`
position: absolute;
left: 27.5px;
top: -7px!important;
width: 25px;
height: 18px;
display: block;
font-family: hbc-icons;
font-size: inherit;
font-style: normal;
font-variant: normal;
font-weight: 400;
line-height: inherit;
text-decoration: none;
text-transform: none;
speak: none;
vertical-align: bottom;
cursor: pointer;
`

const DownArrow = styled.img`
position: absolute;
left: 27.5px;
top: 570px;
width: 25px;
height: 18px;
padding-top: 8px;
display: block;
font-family: hbc-icons;
font-size: inherit;
font-style: normal;
font-variant: normal;
font-weight: 400;
line-height: inherit;
text-decoration: none;
text-transform: none;
speak: none;
vertical-align: bottom;
cursor: pointer;
`

const UpArrowFade = styled.img`
position: absolute;
left: 27.5px;
top: -7px!important;
width: 25px;
height: 18px;
display: block;
font-family: hbc-icons;
font-size: inherit;
font-style: normal;
font-variant: normal;
font-weight: 400;
line-height: inherit;
text-decoration: none;
text-transform: none;
speak: none;
vertical-align: bottom;
opacity: 0.5
`

const DownArrowFade = styled.img`
position: absolute;
left: 27.5px;
top: 570px;
width: 25px;
height: 18px;
padding-top: 8px;
display: block;
font-family: hbc-icons;
font-size: inherit;
font-style: normal;
font-variant: normal;
font-weight: 400;
line-height: inherit;
text-decoration: none;
text-transform: none;
speak: none;
vertical-align: bottom;
opacity: 0.5
`

const DetailShow = styled.div`
overflow: hidden;
height: auto;
transition: all 0.5s;
transition-timing-function: linear
opacity: ${props => (props.open ? "0" : "1")}
max-height: ${props => (props.open ? "0" : "100%")}
padding: ${props => (props.open ? "0 15px" : "0")}
`;


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
    )
  }
}

export default Images;