import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { pushPage } from '../../store/slices/pageHistorySlice';
import { updateCreateMissionConfig } from '../../store/slices/createMissionConfigSlice';
import { updateCreatedManualMission, setCreatedManualMission } from '../../store/slices/createdManualMissionSlice';
import { setMissionAttempt } from '../../store/slices/missionAttemptSlice';
import { saveMission } from '../../services/missionService';
import { startMissionAttempt } from '../../services/missionAttemptService';
import { MissionConfig } from '../../types';
import { CreateMissionMap } from '../Maps';

function CreateManualMission() {
  const dispatch = useDispatch();
  const createdManualMission = useSelector((state: any) => state.createdManualMission);

  const handleSaveMission = async () => {
    try {
      const mission = await saveMission(createdManualMission);
      dispatch(setCreatedManualMission(mission));
      console.log('Saved mission:', mission);
    } catch (error) {
      console.error('Failed to save mission:', error);
    }
  };

  const handleStartMissionAttempt = async () => {
    try {
      const missionAttempt = await startMissionAttempt(createdManualMission);
      console.log('Mission attempt:', missionAttempt);
      dispatch(setMissionAttempt(missionAttempt));
      dispatch(pushPage('attempt-mission'));
    } catch (error) {
      console.error('Failed to start mission:', error);
    }
  };

  const updateConfig = (updates: Partial<MissionConfig>) => {
    dispatch(updateCreateMissionConfig(updates));
  };

  return (
    <div>
      <h1>Manual Mission Generator</h1>

      <CreateMissionMap isManualMission={true} />

      <div>
        <label>Name: </label>
        <input
          value={createdManualMission.config.name} 
          onChange={(e) => dispatch(updateCreatedManualMission({ config: { ...createdManualMission.config, name: e.target.value } }))}
          placeholder="Mission name"
        />
      </div>

      {/*
      <pre>{JSON.stringify(createMissionConfig, null, 2)}</pre>
      <pre>{JSON.stringify(createdMission, null, 2)}</pre>
      */}
      <pre>{JSON.stringify(createdManualMission.config, null, 2)}</pre>

      <button onClick={handleSaveMission}>
        Save Mission
      </button>

      <button onClick={handleStartMissionAttempt}>
        Start Mission Attempt
      </button>
    </div>
  );
};

export default CreateManualMission;
export { CreateManualMission };

