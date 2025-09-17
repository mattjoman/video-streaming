import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { mapUpdate } from '../store/slices/mapSlice';

function Home() {

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(mapUpdate({ active: false }));
  }, [dispatch]);

  return (
    <div>
      <h1>Home</h1>
    </div>
  );
};

export default Home;
export { Home };
