import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DynamoDBService } from './services/dynamodb.service';
import { AppController } from './app.controller';

@Module({
  imports: [
    ConfigModule.forRoot(), // This loads the .env file
  ],
  controllers: [AppController],
  providers: [DynamoDBService],
  exports: [DynamoDBService],
})
export class AppModule {}
