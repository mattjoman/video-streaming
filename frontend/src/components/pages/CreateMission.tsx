import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { pushPage } from '../../store/slices/pageHistorySlice';
import { setCreatedMission } from '../../store/slices/createdMissionSlice';
import { setMissionAttempt } from '../../store/slices/missionAttemptSlice';
import { generateMission, saveMission } from '../../services/missionService';
import { startMissionAttempt } from '../../services/missionAttemptService';
import { CreateMissionMap } from '../Maps';
import { PanelCreateMissionConfig } from '../PanelCreateMissionConfig';
import { PanelCreatedMission } from '../PanelCreatedMission';

function CreateMission() {
  const dispatch = useDispatch();
  const createMissionConfig = useSelector((state: any) => state.createMissionConfig);
  const createdMission = useSelector((state: any) => state.createdMission);

  const handleGenerateMission = async () => {
    try {
      const mission = await generateMission(createMissionConfig);
      console.log('Generated mission:', mission);
      dispatch(setCreatedMission(mission));
    } catch (error) {
      console.error('Failed to generate mission:', error);
    }
  };

  const handleSaveMission = async () => {
    try {
      const mission = await saveMission(createdMission);
      dispatch(setCreatedMission(mission));
      console.log('Saved mission:', mission);
    } catch (error) {
      console.error('Failed to save mission:', error);
    }
  };

  const handleStartMissionAttempt = async () => {
    try {
      const missionAttempt = await startMissionAttempt(createdMission);
      console.log('Mission attempt:', missionAttempt);
      dispatch(setMissionAttempt(missionAttempt));
      dispatch(pushPage('attempt-mission'));
    } catch (error) {
      console.error('Failed to start mission:', error);
    }
  };

  return (
    <div>
      <CreateMissionMap isManualMission={false} />

      <PanelCreatedMission />

      {createdMission.checkpoints.length > 0 && createdMission.config.name !== '' && (
        <button onClick={handleSaveMission}>
          Save Mission
        </button>
      )}

      {createdMission.checkpoints.length > 0 && (
        <button onClick={handleStartMissionAttempt}>
          Begin Mission
        </button>
      )}

      <PanelCreateMissionConfig />

      <button onClick={handleGenerateMission}>
        New Mission
      </button>
    </div>
  );
};

export default CreateMission;
export { CreateMission };
