# Serverless Deployment Guide

This NestJS backend is configured to run both locally and on AWS Lambda using the Serverless Framework.

## Local Development

### Standard NestJS Development
```bash
npm run start:dev
```
This runs the application in watch mode on `http://localhost:3000`

### Serverless Local Development
```bash
npm run start:serverless
```
This runs the application using serverless-offline, simulating the Lambda environment locally.

## Deployment

### Deploy to Development Environment
```bash
npm run deploy
```

### Deploy to Production Environment
```bash
npm run deploy:prod
```

## Environment Variables

### Local Development
- `NODE_ENV`: Set to anything other than 'production' for local development
- `FRONTEND_URL`: Your frontend URL (defaults to `http://localhost:5173`)

### Production (AWS Lambda)
- `NODE_ENV`: Set to 'production'
- `FRONTEND_URL`: Your production frontend URL

## GitHub Actions

The repository includes a GitHub Actions workflow (`.github/workflows/deploy-backend.yml`) that automatically deploys the backend to AWS Lambda when changes are pushed to the `backend/` directory.

### Required Secrets
- `AWS_ACCESS_KEY_ID`: AWS access key for the github-actions-serverless IAM user
- `AWS_SECRET_ACCESS_KEY`: AWS secret key for the github-actions-serverless IAM user

## IAM Permissions

The `github-actions-serverless` IAM user needs the following permissions:
- Lambda: Create, Update, Delete functions
- API Gateway: Create, Update, Delete APIs
- CloudFormation: Create, Update, Delete stacks
- IAM: Create and manage roles
- CloudWatch: Create and manage log groups
- DynamoDB: Full access (as configured in serverless.yml)

## Architecture

- **Runtime**: Node.js 18.x
- **Memory**: 512MB
- **Timeout**: 30 seconds
- **API**: HTTP API Gateway with proxy integration
- **Database**: DynamoDB (configured with necessary permissions) 