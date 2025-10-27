import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { pushPage, popPage } from '../store/slices/pageHistorySlice';
import { Info, CreateMission, AttemptMission, SearchMissions, CreateCheckpoint, CreateManualMission } from './pages';

const pages = [
  { id: 'create-mission', display: 'Create Mission' },
  { id: 'create-manual-mission', display: 'Create Manual Mission' },
  { id: 'attempt-mission', display: 'Attempt Mission' },
  { id: 'search-missions', display: 'Search Missions' },
  { id: 'create-checkpoint', display: 'Create Checkpoint' },
  { id: 'info', display: 'Info' },
];

export default function Navigation() {
  const dispatch = useDispatch();
  const history = useSelector((state: any) => state.pageHistory.history);
  const [showNavigation, setShowNavigation] = useState(false);

  const handleNavigate = (page: string) => {
    dispatch(pushPage(page));
    setShowNavigation(false);
  };

  return (
    <div className="main">
      <div className="show-navigation-container">
        <button onClick={() => setShowNavigation(!showNavigation)} className="show-navigation-button">Navigation</button>
      </div>

      {showNavigation && (
        <div className="navigation">
          <button onClick={() => dispatch(popPage())}>Back</button>
          {pages.map((page: { id: string, display: string }, index: number) => (
            <button
              key={index}
              onClick={() => handleNavigate(page.id)}
              style={history[history.length - 1] === page.id ? { backgroundColor: 'gray' } : { backgroundColor: 'white' }}
            >
              {page.display}
            </button>
          ))}
        </div>
      )}

      <div className="data">
        {history[history.length - 1] === 'info' ? (<Info />) : (<></>)}
        {history[history.length - 1] === 'create-mission' ? (<CreateMission />) : (<></>)}
        {history[history.length - 1] === 'create-manual-mission' ? (<CreateManualMission />) : (<></>)}
        {history[history.length - 1] === 'attempt-mission' ? (<AttemptMission />) : (<></>)}
        {history[history.length - 1] === 'search-missions' ? (<SearchMissions />) : (<></>)}
        {history[history.length - 1] === 'create-checkpoint' ? (<CreateCheckpoint />) : (<></>)}
      </div>

    </div>
  );
}
