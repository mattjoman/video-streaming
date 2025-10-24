## Backend
- When a mission is saved, for `mission.config.cptSource === 'manual'`, do the following:
  - Make sure 'n' in the config matches the length of the checkpoints array
  - Calculate the center of the mission and set `mission.config.location`

## Frontend
- Set the name once the mission is generated (edit the mission directly)