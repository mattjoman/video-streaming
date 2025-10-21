import React, { useState } from 'react';
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
  const [showNavigation, setShowNavigation] = useState(false);

  const handleNavigate = (page: string) => {
    dispatch(pushPage(page));
    setShowNavigation(false);
  };

  return (
    <div style={{
      position: 'relative',
      height: '100vh',
      width: '50em',
      textAlign: 'center',
      margin: 'auto',
    }}>
      <div style={{ height: '3em', backgroundColor: '#aaffff' }}>
        <button onClick={() => setShowNavigation(!showNavigation)}>Navigation</button>
      </div>

      {showNavigation && (
        <div style={{
          height: 'calc(100vh - 3em)',
          width: '100%',
          position: 'absolute',
          top: '3em',
          zIndex: 1000,
          backgroundColor: 'rgba(255, 255, 255, 0.5)',
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)',
        }}>
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

      <div style={{
        height: 'calc(100vh - 3em)',
        width: '100%',
        overflow: 'auto',
        backgroundColor: '#ffffaa',
        position: 'absolute',
        top: '3em',
      }}>
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
