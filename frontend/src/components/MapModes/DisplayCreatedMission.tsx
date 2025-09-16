import React from 'react';
import { AdvancedMarker } from '@vis.gl/react-google-maps';
import { useSelector } from 'react-redux';


export default function DisplayCreatedMission() {
  const createdMission = useSelector((state: any) => state.createdMission);
  return (
    <>
      <AdvancedMarker position={{ lat: 51, lng: 0 }} />
      {createdMission.checkpoints && createdMission.checkpoints.map((checkpoint: any, idx: number) => (
        <AdvancedMarker key={idx} position={{ lat: checkpoint.location.coordinates[1], lng: checkpoint.location.coordinates[0] }} />
      ))}
    </>
  )
}