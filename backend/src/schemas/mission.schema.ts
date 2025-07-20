import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type MissionDocument = Mission & Document;

@Schema({ collection: 'missions' })
export class Mission {
  @Prop({ type: Object, required: true })
  config: any;

  @Prop({ type: Array, required: true })
  checkpoints: any[];
}

export const MissionSchema = SchemaFactory.createForClass(Mission);

// Remove _id and __v from all outputs
MissionSchema.set('toJSON', {
  transform: (doc, ret) => {
    delete ret._id;
    delete ret.__v;
    return ret;
  }
}); 