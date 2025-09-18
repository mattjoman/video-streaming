import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Map, AdvancedMarker } from '@vis.gl/react-google-maps';
import { Checkpoint } from '../../types';
import { updateCreateMissionConfig } from '../../store/slices/createMissionConfigSlice';

function CreateMissionMap() {
  const dispatch = useDispatch();

  const createMissionConfig = useSelector((state: any) => state.createMissionConfig);
  const createdMission = useSelector((state: any) => state.createdMission);

  const handleMapClick = (e: any) => {
    dispatch(updateCreateMissionConfig({ location: { type: 'Point', coordinates: [e.detail.latLng.lng, e.detail.latLng.lat] } }));
  }

  return (
    <Map reuseMaps={true} mapId="map" colorScheme="LIGHT" renderingType="RASTER"
      defaultCenter={{ lat: 0, lng: 0 }}
      defaultZoom={5}
      style={{ width: '100vh', height: '50vh' }}
      onClick={handleMapClick}
    >
      <AdvancedMarker position={{ lng: createMissionConfig.location.coordinates[0], lat: createMissionConfig.location.coordinates[1] }} />
      {createdMission?.checkpoints && createdMission.checkpoints.map((checkpoint: Checkpoint, idx: number) => (
        <AdvancedMarker key={idx} position={{ lat: checkpoint.location.coordinates[1], lng: checkpoint.location.coordinates[0] }} />
      ))}
    </Map>
  )
}

export default CreateMissionMap;
export { CreateMissionMap };
