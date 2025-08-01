import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type CheckpointDocument = Checkpoint & Document;

@Schema({ collection: 'checkpoints' })
export class Checkpoint {
  @Prop({ required: true })
  name: string;

  @Prop({
    type: {
      type: String,
      enum: ['Point'],
      required: true,
    },
    coordinates: {
      type: [Number],
      required: true,
    },
  })
  location: {
    type: 'Point';
    coordinates: [number, number]; // [longitude, latitude]
  };

  @Prop({ type: [String], default: [] })
  tags: string[];
}

export const CheckpointSchema = SchemaFactory.createForClass(Checkpoint);

// Remove _id from all outputs
CheckpointSchema.set('toJSON', {
  transform: (doc, ret) => {
    delete ret._id;
    return ret;
  }
}); 