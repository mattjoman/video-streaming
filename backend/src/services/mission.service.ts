import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Mission, MissionDocument } from '../schemas/mission.schema';
import { MissionDto } from '../dto/mission.dto';

@Injectable()
export class MissionService {
  constructor(
    @InjectModel(Mission.name) private readonly missionModel: Model<MissionDocument>,
  ) {}

  async saveMission(missionData: Partial<MissionDto>): Promise<Mission> {
    try {
      console.log('Attempting to save mission:', JSON.stringify(missionData, null, 2));
      
      // Validate that the mission has a non-empty name before saving
      if (!missionData.config.name || missionData.config.name.trim() === '') {
        throw new Error('Mission name cannot be empty when saving');
      }
      
      const mission = new this.missionModel(missionData);
      console.log('Mission model created, attempting to save...');
      
      const savedMission = await mission.save();
      console.log('Mission saved successfully:', savedMission);
      
      return savedMission;
    } catch (error) {
      console.error('Error saving mission:', error);
      throw error;
    }
  }

  async getAllMissions(): Promise<Mission[]> {
    return this.missionModel.find().exec();
  }

  async getMissionById(id: string): Promise<Mission | null> {
    return this.missionModel.findById(id).exec();
  }
} 