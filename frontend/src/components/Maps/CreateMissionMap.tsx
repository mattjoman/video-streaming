import React from 'react';
import { useSelector } from 'react-redux';
import { Map, AdvancedMarker } from '@vis.gl/react-google-maps';

export default function CreateMissionMap() {
  const createMissionConfig = useSelector((state: any) => state.createMissionConfig);
  const createdMission = useSelector((state: any) => state.createdMission);
  return (
    <Map reuseMaps={true} mapId="map" colorScheme="LIGHT" renderingType="RASTER"
      defaultCenter={{ lat: 0, lng: 0 }}
      defaultZoom={5}
      style={{ width: '100vh', height: '100vh' }}
    >
      <AdvancedMarker position={{ lat: 0, lng: 0 }} />
      {createdMission?.checkpoints && createdMission.checkpoints.map((checkpoint: any, idx: number) => (
        <AdvancedMarker key={idx} position={{ lat: checkpoint.location.coordinates[1], lng: checkpoint.location.coordinates[0] }} />
      ))}
    </Map>
  )
}


