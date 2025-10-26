import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateCreatedManualMission } from '../store/slices/createdManualMissionSlice';
import { TextInput } from './common';

export function PanelCreatedManualMission() {
  const dispatch = useDispatch();
  const createdManualMission = useSelector((state: any) => state.createdManualMission);

  const handleUpdateMissionName = (value: string) => {
    dispatch(updateCreatedManualMission({ config: { ...createdManualMission.config, name: value } }));
  };

  return (
    <div className="panel">
      <TextInput
        label="Name: "
        value={createdManualMission.config.name}
        onChange={(value: string) => handleUpdateMissionName(value)}
        placeholder="Mission name"
      />
    </div>
  );
}