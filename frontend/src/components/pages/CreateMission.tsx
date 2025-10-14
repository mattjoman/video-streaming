import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { pushPage } from '../../store/slices/pageHistorySlice';
import { updateCreateMissionConfig } from '../../store/slices/createMissionConfigSlice';
import { setCreatedMission } from '../../store/slices/createdMissionSlice';
import { setMissionAttempt } from '../../store/slices/missionAttemptSlice';
import { generateMission, saveMission } from '../../services/missionService';
import { startMissionAttempt } from '../../services/missionAttemptService';
import { MissionConfig } from '../../types';
import { CreateMissionMap } from '../Maps';
import { MultiChoiceInput, NumberInput, TagSelector, TextInput } from '../common';

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

  const updateConfig = (updates: Partial<MissionConfig>) => {
    dispatch(updateCreateMissionConfig(updates));
  };

  return (
    <div>
      <CreateMissionMap isManualMission={false} />

      <TextInput
        label="Name: "
        value={createMissionConfig.name}
        onChange={(value: string) => updateConfig({ name: value })}
        placeholder="Mission name"
      />

      <MultiChoiceInput
        label="Source: "
        options={[{ value: 'database', label: 'Database' }, { value: 'random', label: 'Random' }]}
        value={createMissionConfig.cptSource}
        setValue={(value: string) => updateConfig({ cptSource: value })}
      />

      <NumberInput
        label="Radius (km): "
        value={createMissionConfig.r}
        onChange={(value) => updateConfig({ r: value })}
        placeholder="10"
      />

      <NumberInput
        label="Number of checkpoints: "
        value={createMissionConfig.n}
        onChange={(value) => updateConfig({ n: value })}
        placeholder="3"
      />

      {createMissionConfig.cptSource === 'database' && (
        <TagSelector
          tags={createMissionConfig.tags}
          onChange={(tags: string[]) => updateConfig({ tags: tags })}
        />
      )}

      <button onClick={handleGenerateMission}>
        New Mission
      </button>

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
    </div>
  );
};

export default CreateMission;
export { CreateMission };
