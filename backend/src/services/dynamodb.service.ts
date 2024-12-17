import { Injectable } from '@nestjs/common';
import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import { DynamoDBDocumentClient } from '@aws-sdk/lib-dynamodb';

@Injectable()
export class DynamoDBService {
  private readonly ddbClient: DynamoDBClient;
  public readonly documentClient: DynamoDBDocumentClient;

  constructor() {
    // Initialize the DynamoDB client
    this.ddbClient = new DynamoDBClient({
      region: 'your-region', // e.g., 'us-east-1'
      credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
      },
    });

    // Initialize the DocumentClient
    this.documentClient = DynamoDBDocumentClient.from(this.ddbClient);
  }
} 