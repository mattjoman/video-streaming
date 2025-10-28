import React from 'react';
import { AdvancedMarker, Pin } from '@vis.gl/react-google-maps';

function CheckpointMarker({ position, selectCheckpoint }: { position: { lat: number, lng: number }, selectCheckpoint: (() => void) | null }) {
  return (
    <AdvancedMarker position={position} onClick={selectCheckpoint ?? undefined}>
      <Pin background={'#ff0000'}
        borderColor={'#000000'}
        glyphColor={'#ffffff'}
      />
    </AdvancedMarker>
  )
}

export default CheckpointMarker;
export { CheckpointMarker };
