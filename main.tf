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
  bucket = "playerappassessment"
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
  billing_mode   = "PAY_PER_REQUEST"  # On-demand pricing
  hash_key       = "user_id"
  
  attribute {
    name = "user_id"
    type = "S"  # String type
  }

  tags = {
    Environment = "production"
    Project     = "PlayerAppAssessment"
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