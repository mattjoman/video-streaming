import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { mapSetActive } from '../store/slices/mapSlice';

export default function SearchMissions() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(mapSetActive(false));
  }, [dispatch]);

  return (
    <div>
      <h1>Search Missions</h1>
    </div>
  )
}
