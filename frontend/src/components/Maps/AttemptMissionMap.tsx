import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Map } from '@vis.gl/react-google-maps';
import { AttemptCheckpoint } from '../../types';
import { CheckpointMarker } from './CheckpointMarker';

function AttemptMissionMap() {
  const dispatch = useDispatch();

  const missionAttempt = useSelector((state: any) => state.missionAttempt);

  return (
    <Map reuseMaps={true} mapId="map" colorScheme="LIGHT" renderingType="RASTER"
      defaultCenter={{ lat: 0, lng: 0 }}
      defaultZoom={5}
      style={{ width: '100vh', height: '50vh' }}
    >
      {missionAttempt?.checkpoints && missionAttempt.checkpoints.map((checkpoint: AttemptCheckpoint, idx: number) => (
        <CheckpointMarker key={idx} position={{ lng: checkpoint.location.coordinates[0], lat: checkpoint.location.coordinates[1] }} />
      ))}
    </Map>
  )
}

export default AttemptMissionMap;
export { AttemptMissionMap };
