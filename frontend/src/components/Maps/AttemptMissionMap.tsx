import React from 'react';
import { Map, AdvancedMarker } from '@vis.gl/react-google-maps';

function AttemptMissionMap() {
  return (
    <Map reuseMaps={true} mapId="map" colorScheme="LIGHT" renderingType="RASTER"
      defaultCenter={{ lat: 0, lng: 0 }}
      defaultZoom={5}
      style={{ width: '100vh', height: '100vh' }}
    >
      <AdvancedMarker position={{ lat: 51, lng: 0 }} />
    </Map>
  )
}

export default AttemptMissionMap;
export { AttemptMissionMap };
