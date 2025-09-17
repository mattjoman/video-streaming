import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { mapUpdate } from '../store/slices/mapSlice';

function SearchMissions() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(mapUpdate({ active: false }));
  }, [dispatch]);

  return (
    <div>
      <h1>Search Missions</h1>
    </div>
  )
}

export default SearchMissions;
export { SearchMissions };
