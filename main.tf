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

variable "bucket_name" {
  description = "Name of the S3 bucket"
  type        = string
  default     = "playerappassessment"
}

# S3 Bucket
resource "aws_s3_bucket" "main" {
  bucket = "${var.bucket_name}-${random_string.suffix.result}"
  #bucket = "${var.bucket_name}"
}

resource "random_string" "suffix" {
  length  = 8
  special = false
  upper   = false
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

# Output
output "bucket_name" {
  description = "Name of the created S3 bucket"
  value       = aws_s3_bucket.main.id
}