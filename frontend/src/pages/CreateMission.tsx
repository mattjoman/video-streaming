import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateCreateMissionConfig } from '../store/slices/createMissionConfigSlice';
import { setCreatedMission } from '../store/slices/createdMissionSlice';
import { generateMission, saveMission } from '../services/missionService';
import { MissionConfig } from '../types';

const CreateMission = () => {
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
      console.log('Saved mission:', mission);
    } catch (error) {
      console.error('Failed to save mission:', error);
    }
  };

  const updateConfig = (updates: Partial<MissionConfig>) => {
    dispatch(updateCreateMissionConfig(updates));
  };

  return (
    <div>
      <h1>Mission Generator</h1>
      
      <div>
        <label>Name: </label>
        <input 
          value={createMissionConfig.name} 
          onChange={(e) => updateConfig({ name: e.target.value })}
          placeholder="Mission name"
        />
      </div>

      <div>
        <label>Number of checkpoints: </label>
        <input 
          type="number" 
          value={createMissionConfig.n} 
          onChange={(e) => updateConfig({ n: parseInt(e.target.value) })}
          min="1" 
          max="50"
        />
      </div>

      <div>
        <label>Tags: </label>
        <input 
          value={createMissionConfig.tags.join(', ')} 
          onChange={(e) => updateConfig({ tags: e.target.value.split(',').map(tag => tag.trim()) })}
          placeholder="nature, scenic"
        />
      </div>

      <button onClick={handleGenerateMission}>
        Generate Mission
      </button>

      <pre>{JSON.stringify(createMissionConfig, null, 2)}</pre>
      <pre>{JSON.stringify(createdMission, null, 2)}</pre>

      <button onClick={handleSaveMission}>
        Save Mission
      </button>
    </div>
  );
};

export default CreateMission;
