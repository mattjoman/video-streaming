import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { CheckpointController } from './controllers/checkpoint.controller';
import { CheckpointService } from './services/checkpoint.service';
import { Checkpoint, CheckpointSchema } from './schemas/checkpoint.schema';
import { MissionController } from './controllers/mission.controller';
import { MissionService } from './services/mission.service';
import { Mission, MissionSchema } from './schemas/mission.schema';
import { LoggerMiddleware } from './middleware/logger.middleware';
import { MissionAttemptService } from './services/mission-attempt.service';
import { MissionAttemptController } from './controllers/mission-attempt.controller';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get<string>('MONGODB_CONN_STRING'),
      }),
      inject: [ConfigService],
    }),
    MongooseModule.forFeature([
      { name: Checkpoint.name, schema: CheckpointSchema },
      { name: Mission.name, schema: MissionSchema }
    ]),
  ],
  controllers: [AppController, CheckpointController, MissionController, MissionAttemptController],
  providers: [CheckpointService, MissionService, MissionAttemptService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes('*');  // Apply to all routes
  }
}
