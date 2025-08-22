import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateMissionConfig } from '../store/slices/missionConfigSlice';
import { generateMission } from '../services/missionService';
import { MissionConfig } from '../types';

const CreateMission = () => {
  const dispatch = useDispatch();
  const missionConfig = useSelector((state: any) => state.missionConfig);

  const handleGenerateMission = async () => {
    try {
      const mission = await generateMission(missionConfig);
      console.log('Generated mission:', mission);
    } catch (error) {
      console.error('Failed to generate mission:', error);
    }
  };

  const updateConfig = (updates: Partial<MissionConfig>) => {
    dispatch(updateMissionConfig(updates));
  };

  return (
    <div>
      <h1>Mission Generator</h1>
      
      <div>
        <label>Name: </label>
        <input 
          value={missionConfig.name} 
          onChange={(e) => updateConfig({ name: e.target.value })}
          placeholder="Mission name"
        />
      </div>

      <div>
        <label>Number of checkpoints: </label>
        <input 
          type="number" 
          value={missionConfig.n} 
          onChange={(e) => updateConfig({ n: parseInt(e.target.value) })}
          min="1" 
          max="50"
        />
      </div>

      <div>
        <label>Tags: </label>
        <input 
          value={missionConfig.tags.join(', ')} 
          onChange={(e) => updateConfig({ tags: e.target.value.split(',').map(tag => tag.trim()) })}
          placeholder="nature, scenic"
        />
      </div>

      <button onClick={handleGenerateMission}>
        Generate Mission
      </button>

      <pre>{JSON.stringify(missionConfig, null, 2)}</pre>
    </div>
  );
};

export default CreateMission;
