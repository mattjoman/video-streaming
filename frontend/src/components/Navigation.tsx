import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { pushPage, popPage } from '../store/slices/pageHistorySlice';
import { Home, CreateMission, AttemptMission, SearchMissions, CreateCheckpoint, CreateManualMission } from './pages';

const pages = [
  { id: 'home', display: 'Home' },
  { id: 'create-mission', display: 'Create Mission' },
  { id: 'create-manual-mission', display: 'Create Manual Mission' },
  { id: 'attempt-mission', display: 'Attempt Mission' },
  { id: 'search-missions', display: 'Search Missions' },
  { id: 'create-checkpoint', display: 'Create Checkpoint' },
];

export default function Navigation() {
  const dispatch = useDispatch();
  const history = useSelector((state: any) => state.pageHistory.history);

  const handleNavigate = (page: string) => {
    dispatch(pushPage(page));
  };

  return (
    <div>
      <div>
        <button onClick={() => dispatch(popPage())}>Back</button>
        {pages.map((page: { id: string, display: string }, index: number) => (
          <button key={index} onClick={() => handleNavigate(page.id)}>
            {page.display}
          </button>
        ))}
      </div>
      <div>
        {history[history.length - 1] === 'home' ? (<Home />) : (<></>)}
        {history[history.length - 1] === 'create-mission' ? (<CreateMission />) : (<></>)}
        {history[history.length - 1] === 'create-manual-mission' ? (<CreateManualMission />) : (<></>)}
        {history[history.length - 1] === 'attempt-mission' ? (<AttemptMission />) : (<></>)}
        {history[history.length - 1] === 'search-missions' ? (<SearchMissions />) : (<></>)}
        {history[history.length - 1] === 'create-checkpoint' ? (<CreateCheckpoint />) : (<></>)}
      </div>
    </div>
  );
}
