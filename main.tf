# Configure AWS Provider
provider "aws" {
  region = var.aws_region
}

# Variables
variable "aws_region" {
  description = "AWS region to deploy the S3 bucket"
  type        = string
  default     = "us-west-2"
}

# S3 Bucket
resource "aws_s3_bucket" "main" {
  bucket = "video-streaming-app-bucket"
}

# Enable versioning
resource "aws_s3_bucket_versioning" "versioning" {
  bucket = aws_s3_bucket.main.id
  versioning_configuration {
    status = "Enabled"
  }
}

# Block public access (recommended for security)
resource "aws_s3_bucket_public_access_block" "public_access" {
  bucket = aws_s3_bucket.main.id

  block_public_acls       = true
  block_public_policy     = true
  ignore_public_acls      = true
  restrict_public_buckets = true
}

# DynamoDB Table
resource "aws_dynamodb_table" "users" {
  name           = "users"
  billing_mode   = "PAY_PER_REQUEST"
  hash_key       = "user_id"
  
  attribute {
    name = "user_id"
    type = "S"
  }

  attribute {
    name = "team"
    type = "S"
  }

  global_secondary_index {
    name               = "TeamIndex"
    hash_key          = "team"
    projection_type    = "ALL"
  }

  tags = {
    Environment = "production"
    Project     = "video-streaming-app"
  }
}

# Output
output "bucket_name" {
  description = "Name of the created S3 bucket"
  value       = aws_s3_bucket.main.id
}

# Additional output for DynamoDB
output "dynamodb_table_name" {
  description = "Name of the created DynamoDB table"
  value       = aws_dynamodb_table.users.name
}