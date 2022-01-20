import React, { Component } from "react";
import { Map, Marker, GoogleApiWrapper } from "google-maps-react";

const mapStyles = {
  width: "100%",
  height: "100%"
}

export class MapContainer extends Component {
    state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
    };
   
    onMarkerClick = (props, marker, e) =>
      this.setState({
        selectedPlace: props,
        activeMarker: marker,
        showingInfoWindow: true
      });
   
    onMapClicked = (props) => {
      if (this.state.showingInfoWindow) {
        this.setState({
          showingInfoWindow: false,
          activeMarker: null
        })
      }
    };
   
    render() {
      return (
        <Map google={this.props.google}
          zoom={14}
          style={mapStyles}
          initialCenter={
            {
              lat: 33.90905590740114,
              lng: -118.35194760000003
            }
          }
          onClick={this.onMapClicked}
        >
          <Marker onClick={this.onMarkerClick}
                  name={'QCPAccounting'} />
        </Map>
      )
    }
  }

  export default GoogleApiWrapper({
    apiKey: ("AIzaSyDw68l0_UrWCKsy2EFOkYyWlcV3rtSLy34")
  })(MapContainer)