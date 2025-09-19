## Backend
1. When a mission is saved, for `mission.config.cptSource === 'manual'`, do the following:
  - Make sure 'n' in the config matches the length of the checkpoints array
  - Calculate the center of the mission and set `mission.config.location`

## Frontend
1. Reduce complexity by having a separate `createdMissionSlice` called `manualCreatedMissionSlice`, and a separate `CreateManualMission` component