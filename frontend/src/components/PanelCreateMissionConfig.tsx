import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateCreateMissionConfig } from '../store/slices/createMissionConfigSlice';
import { MissionConfig } from '../types';
import { MultiChoiceInput, NumberInput, TagSelector, TextInput } from './common';

export function PanelCreateMissionConfig() {
  const dispatch = useDispatch();
  const createMissionConfig = useSelector((state: any) => state.createMissionConfig);

  const updateConfig = (updates: Partial<MissionConfig>) => {
    dispatch(updateCreateMissionConfig(updates));
  };

  return (
    <div>
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
    </div>
  );
}