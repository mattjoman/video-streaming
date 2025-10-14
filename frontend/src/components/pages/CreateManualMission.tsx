import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { pushPage } from '../../store/slices/pageHistorySlice';
import { updateCreatedManualMission, setCreatedManualMission } from '../../store/slices/createdManualMissionSlice';
import { setMissionAttempt } from '../../store/slices/missionAttemptSlice';
import { saveMission } from '../../services/missionService';
import { startMissionAttempt } from '../../services/missionAttemptService';
import { CreateMissionMap } from '../Maps';
import { TextInput } from '../common';

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

  const updateMissionName = (value: string) => {
    dispatch(updateCreatedManualMission({ config: { ...createdManualMission.config, name: value } }));
  };

  return (
    <div>
      <CreateMissionMap isManualMission={true} />

      <TextInput
        label="Name: "
        value={createdManualMission.config.name}
        onChange={(value: string) => updateMissionName(value)}
        placeholder="Mission name"
      />

      {createdManualMission.checkpoints.length > 0 && createdManualMission.config.name !== '' && (
        <button onClick={handleSaveMission}>
          Save Mission
        </button>
      )}

      {createdManualMission.checkpoints.length > 0 && (
        <button onClick={handleStartMissionAttempt}>
          Begin Mission
        </button>
      )}
    </div>
  );
};

export default CreateManualMission;
export { CreateManualMission };

