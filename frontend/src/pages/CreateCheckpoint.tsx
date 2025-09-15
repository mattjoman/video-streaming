import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { mapSetActive } from '../store/slices/mapSlice';

export default function CreateCheckpoint() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(mapSetActive(true));
  }, [dispatch]);

  return (
    <div>
      <h1>Create Checkpoint</h1>
    </div>
  )
}
