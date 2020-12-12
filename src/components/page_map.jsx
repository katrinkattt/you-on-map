import React, { Component } from 'react'
import GoogleMapReact from 'google-map-react'

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default class PaageMap extends Component {
  static defaultProps = {
    center: {
      lat: 57.15,
      lng: 65.53
    },
    zoom: 11
  };

  render() {
    return (
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyDG-y855927av8_X1XkLiPvnYaxkxv1-qw' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={57.153033}
            lng={65.534328}
            // text=""
          />
        </GoogleMapReact>
      </div>
    );
  }
}

