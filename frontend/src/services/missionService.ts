import axios from 'axios';
import toast from 'react-hot-toast';
import { Mission, MissionConfig } from '../types';

export const generateMission = async (missionConfig: MissionConfig) => {
  try {
    const response = await axios.post('/checkpoints/generate-mission', missionConfig);
    toast.success('Mission generated successfully!');
    return response.data;
  } catch (error) {
    const errorMessage = error.response?.data?.message || 'Failed to generate mission';
    toast.error(errorMessage);
    throw error;
  }
};

export const saveMission = async (mission: Mission) => {
  try {
    const response = await axios.post('/missions', mission);
    toast.success('Mission saved successfully!');
    return response.data;
  } catch (error) {
    const errorMessage = error.response?.data?.message || 'Failed to save mission';
    toast.error(errorMessage);
    throw error;
  }
}
