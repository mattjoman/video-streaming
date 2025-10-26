import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation, useLocationTest } from '../../hooks';
import { Map } from '@vis.gl/react-google-maps';
import { AttemptCheckpoint } from '../../types';
import { CheckpointMarker } from './CheckpointMarker';
import { VisitedCheckpointMarker } from './VisitedCheckpointMarker';
import { UserLocationMarker } from './UserLocationMarker';
import { isAtCheckpoint } from '../../helpers';
import { visitCheckpoint } from '../../store/slices/missionAttemptSlice';

function AttemptMissionMap() {
  const dispatch = useDispatch();

  const missionAttempt = useSelector((state: any) => state.missionAttempt);
  const location = useLocationTest();

  useEffect(() => {

    if (!missionAttempt.checkpoints)
      return;

    for (let idx = 0; idx < missionAttempt.checkpoints.length; idx++) {
      const checkpoint = missionAttempt.checkpoints[idx];
      if (isAtCheckpoint(location, {lng: checkpoint.location.coordinates[0], lat: checkpoint.location.coordinates[1]})) {
        dispatch(visitCheckpoint({ idx }));
      }
    }
  }, [location, missionAttempt.checkpoints]);

  return (
    <Map reuseMaps={true} mapId="map" colorScheme="LIGHT" renderingType="RASTER"
      defaultCenter={{ lat: 51.25, lng: 0 }}
      defaultZoom={5}
      className="map"
    >
      {missionAttempt?.checkpoints && missionAttempt.checkpoints.map((checkpoint: AttemptCheckpoint, idx: number) => (
        <>
          {checkpoint.isVisited ? (
            <VisitedCheckpointMarker key={idx} position={{ lng: checkpoint.location.coordinates[0], lat: checkpoint.location.coordinates[1] }} />
          ) : (
            <CheckpointMarker key={idx} position={{ lng: checkpoint.location.coordinates[0], lat: checkpoint.location.coordinates[1] }} selectCheckpoint={() => null} />
          )}
        </>
      ))}
      <UserLocationMarker position={location} />
    </Map>
  )
}

export default AttemptMissionMap;
export { AttemptMissionMap };
