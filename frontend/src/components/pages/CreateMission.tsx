import React from 'react';
import { CreateMissionMap } from '../Maps';
import { PanelCreateMissionConfig } from '../PanelCreateMissionConfig';
import { PanelCreatedMission } from '../PanelCreatedMission';

function CreateMission() {

  return (
    <div>
      <CreateMissionMap isManualMission={false} />
      <PanelCreatedMission />
      <PanelCreateMissionConfig />
    </div>
  );
};

export default CreateMission;
export { CreateMission };
