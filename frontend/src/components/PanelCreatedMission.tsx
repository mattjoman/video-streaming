import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateCreatedMission } from '../store/slices/createdMissionSlice';
import { TextInput } from './common';

export function PanelCreatedMission() {
  const dispatch = useDispatch();
  const createdMission = useSelector((state: any) => state.createdMission);

  const handleUpdateMissionName = (value: string) => {
    dispatch(updateCreatedMission({ config: { ...createdMission.config, name: value } }));
  };

  if ((createdMission.checkpoints ?? []).length === 0) {
    return (<></>);
  }

  return (
    <div>
      <TextInput
        label="Name: "
        value={createdMission.config.name}
        onChange={(value: string) => handleUpdateMissionName(value)}
        placeholder="Mission name"
      />
      <div>
        <table style={{ width: 'fit-content', margin: 'auto', textAlign: 'left' }}>
          <tbody>
            <tr>
              <th>Source: </th>
              <td>{createdMission.config.cptSource}</td>
            </tr>
            <tr>
              <th>Radius (km): </th>
              <td>{createdMission.config.r}</td>
            </tr>
            <tr>
              <th>Number of checkpoints: </th>
              <td>{createdMission.checkpoints.length}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}