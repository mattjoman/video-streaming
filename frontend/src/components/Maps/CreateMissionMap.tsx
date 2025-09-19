import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Map } from '@vis.gl/react-google-maps';
import { Checkpoint } from '../../types';
import { updateCreateMissionConfig } from '../../store/slices/createMissionConfigSlice';
import { CheckpointMarker } from './CheckpointMarker';
import { VisitedCheckpointMarker } from './VisitedCheckpointMarker';
import { SelectedLocationMarker } from './SelectedLocationMarker';
import { addCreatedMissionCheckpoint, removeCreatedMissionCheckpoint } from '../../store/slices/createdMissionSlice';

function ManualMode({ manualSelectedIdx, setManualSelectedIdx }: { manualSelectedIdx: number | null, setManualSelectedIdx: (idx: number | null) => void }) {
  const dispatch = useDispatch();

  const createMissionConfig = useSelector((state: any) => state.createMissionConfig);
  const createdMission = useSelector((state: any) => state.createdMission);

  return (
    <>
      <SelectedLocationMarker position={{ lng: createMissionConfig.location.coordinates[0], lat: createMissionConfig.location.coordinates[1] }} />
      {createdMission?.checkpoints && createdMission.checkpoints.map((checkpoint: Checkpoint, idx: number) => {
        return (
          <>
            {manualSelectedIdx === idx ? (
              <VisitedCheckpointMarker key={idx}
                position={{ lng: checkpoint.location.coordinates[0], lat: checkpoint.location.coordinates[1] }}
              />
            ) : (
              <CheckpointMarker key={idx}
                position={{ lng: checkpoint.location.coordinates[0], lat: checkpoint.location.coordinates[1] }}
                selectCheckpoint={() => setManualSelectedIdx(idx)}
              />
            )}
          </>
      )})}
    </>
  )
}

function DatabaseAndRandomModes() {
  const dispatch = useDispatch();

  const createMissionConfig = useSelector((state: any) => state.createMissionConfig);
  const createdMission = useSelector((state: any) => state.createdMission);

  return (
    <>
      <SelectedLocationMarker position={{ lng: createMissionConfig.location.coordinates[0], lat: createMissionConfig.location.coordinates[1] }} />
      {createdMission?.checkpoints && createdMission.checkpoints.map((checkpoint: Checkpoint, idx: number) => (
        <CheckpointMarker key={idx} position={{ lng: checkpoint.location.coordinates[0], lat: checkpoint.location.coordinates[1] }} selectCheckpoint={null} />
      ))}
    </>
  )
}

function CreateMissionMap() {
  const dispatch = useDispatch();

  const createMissionConfig = useSelector((state: any) => state.createMissionConfig);

  const [manualSelectedIdx, setManualSelectedIdx] = useState<number | null>(null);

  const handleMapClick = (e: any) => {
    dispatch(updateCreateMissionConfig({ location: { type: 'Point', coordinates: [e.detail.latLng.lng, e.detail.latLng.lat] } }));
  }

  const handleAddCheckpoint = () => {
    dispatch(addCreatedMissionCheckpoint(createMissionConfig.location));
    setManualSelectedIdx(null);
  }

  const handleRemoveCheckpoint = () => {
    dispatch(removeCreatedMissionCheckpoint(manualSelectedIdx));
    setManualSelectedIdx(null);
  }

  return (
    <>
      <Map reuseMaps={true} mapId="map" colorScheme="LIGHT" renderingType="RASTER"
        defaultCenter={{ lat: 0, lng: 0 }}
        defaultZoom={5}
        style={{ width: '100vh', height: '50vh' }}
        onClick={handleMapClick}
      >
        {createMissionConfig.cptSource === 'manual' ? (
          <ManualMode manualSelectedIdx={manualSelectedIdx} setManualSelectedIdx={setManualSelectedIdx} />
        ) : (
          <DatabaseAndRandomModes />
        )}
      </Map>
      {createMissionConfig.cptSource === 'manual' && (
        <>
          {manualSelectedIdx !== null && (
            <button onClick={handleRemoveCheckpoint}>Remove Checkpoint</button>
          )}
          <button onClick={handleAddCheckpoint}>Add Checkpoint</button>
        </>
      )}
    </>
  )
}

export default CreateMissionMap;
export { CreateMissionMap };
