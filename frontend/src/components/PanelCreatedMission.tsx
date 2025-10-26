import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateCreatedMission, setCreatedMission } from '../store/slices/createdMissionSlice';
import { pushPage } from '../store/slices/pageHistorySlice';
import { setMissionAttempt } from '../store/slices/missionAttemptSlice';
import { saveMission } from '../services/missionService';
import { startMissionAttempt } from '../services/missionAttemptService';
import { TextInput } from './common';

export function PanelCreatedMission() {
  const dispatch = useDispatch();
  const createdMission = useSelector((state: any) => state.createdMission);

  const handleUpdateMissionName = (value: string) => {
    dispatch(updateCreatedMission({ config: { ...createdMission.config, name: value } }));
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

  if ((createdMission.checkpoints ?? []).length === 0) {
    return (<></>);
  }

  return (
    <div className="panel">
      <h2>Current Mission</h2>
      <TextInput
        label="Name: "
        value={createdMission.config.name}
        onChange={(value: string) => handleUpdateMissionName(value)}
        placeholder="Mission name"
      />
      <div>
        <table>
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
}