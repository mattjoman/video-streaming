import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

// Only import serverless dependencies in production
let serverlessExpress: any;
let server: any;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  // Enable CORS for frontend
  app.enableCors({
    origin: process.env.NODE_ENV === 'production' 
      ? process.env.FRONTEND_URL || 'https://your-frontend-domain.com'
      : 'http://localhost:5173', // Vite's default port
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
  });

  return app;
}

// Lambda handler (only used in production)
export const handler = async (event: any, context: any) => {
  if (!serverlessExpress) {
    serverlessExpress = require('@vendia/serverless-express').default;
  }
  
  const app = await bootstrap();
  await app.init();
  
  const expressApp = app.getHttpAdapter().getInstance();
  server = server ?? serverlessExpress({ app: expressApp });
  
  return server(event, context);
};

// Local development
if (process.env.NODE_ENV !== 'production') {
  bootstrap().then(async (app) => {
    await app.listen(3000);
    console.log('Application is running on: http://localhost:3000');
  });
}
