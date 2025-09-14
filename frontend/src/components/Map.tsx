import React from 'react';
import { Map, APIProvider, AdvancedMarker } from '@vis.gl/react-google-maps';

const googleMapsApiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

export default function MyMap() {

  return (
    <div>
      <h1>Map</h1>
      <APIProvider apiKey={googleMapsApiKey} libraries={['marker']}>
        <Map
          mapId="map"
          defaultCenter={{ lat: 0, lng: 0 }}
          defaultZoom={5}
          style={{ width: '70vw', height: '100vh' }}
        >
          <AdvancedMarker position={{ lat: 0, lng: 0 }} />
        </Map>
      </APIProvider>
    </div>
  )
}

