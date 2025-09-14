import React from 'react';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

export default function Map() {

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
  });
  console.log(import.meta.env.VITE_GOOGLE_MAPS_API_KEY);

  return (
    <div>
      <h1>Map</h1>
      {isLoaded ? (
        <GoogleMap mapContainerStyle={{ width: '70vw', height: '100vh' }} center={{ lat: 0, lng: 0 }} zoom={10}>
        </GoogleMap>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  )
}
