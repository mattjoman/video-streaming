import axios from 'axios';
import toast from 'react-hot-toast';
import { MissionAttempt } from '../types';

export const startMissionAttempt = async (missionAttempt: MissionAttempt) => {
  try {
    const response = await axios.post('/mission-attempt/start', missionAttempt);
    toast.success('Mission attempt started successfully!');
    return response.data;
  } catch (error) {
    const errorMessage = error.response?.data?.message || 'Failed to attempt mission';
    toast.error(errorMessage);
    throw error;
  }
};
