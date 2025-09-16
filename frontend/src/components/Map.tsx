import React from 'react';
import { useSelector } from 'react-redux';
import { Map, APIProvider } from '@vis.gl/react-google-maps';
import DisplayCreatedMission from './MapModes/DisplayCreatedMission';

const googleMapsApiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

export default function MyMap() {

  const isActive = useSelector((state: any) => state.map.active);

  return (
    <div style={{ width: '100%', height: isActive ? '50em' : '0px' }}>
      <h1>Map</h1>
      <APIProvider apiKey={googleMapsApiKey} libraries={['marker']}>
        <Map
          mapId="map"
          defaultCenter={{ lat: 0, lng: 0 }}
          defaultZoom={5}
          style={{ width: '100%', height: '100%' }}
        >
          <DisplayCreatedMission />
        </Map>
      </APIProvider>
    </div>
  )
}

