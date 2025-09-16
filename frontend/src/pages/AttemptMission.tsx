import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { mapUpdate } from '../store/slices/mapSlice';

export default function AttemptMission() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(mapUpdate({ active: true }));
  }, [dispatch]);

  return (
    <div>
      <h1>Attempt Mission</h1>
    </div>
  )
}
