import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { mapSetActive } from '../store/slices/mapSlice';

const Home = () => {

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(mapSetActive(false));
  }, [dispatch]);

  return (
    <div>
      <h1>Home</h1>
    </div>
  );
};

export default Home;
