import React from 'react';
import { useSelector } from 'react-redux';
import { useLocation, useLocationTest } from '../../hooks';
import { Map } from '@vis.gl/react-google-maps';
import { AttemptCheckpoint } from '../../types';
import { CheckpointMarker } from './CheckpointMarker';
import { UserLocationMarker } from './UserLocationMarker';

function AttemptMissionMap() {

  const missionAttempt = useSelector((state: any) => state.missionAttempt);
  const location = useLocationTest();

  return (
    <Map reuseMaps={true} mapId="map" colorScheme="LIGHT" renderingType="RASTER"
      defaultCenter={{ lat: 0, lng: 0 }}
      defaultZoom={5}
      style={{ width: '100vh', height: '50vh' }}
    >
      {missionAttempt?.checkpoints && missionAttempt.checkpoints.map((checkpoint: AttemptCheckpoint, idx: number) => (
        <CheckpointMarker key={idx} position={{ lng: checkpoint.location.coordinates[0], lat: checkpoint.location.coordinates[1] }} selectCheckpoint={() => null} />
      ))}
      <UserLocationMarker position={location} />
    </Map>
  )
}

export default AttemptMissionMap;
export { AttemptMissionMap };
