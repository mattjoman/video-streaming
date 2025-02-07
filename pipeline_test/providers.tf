provider "aws" {
  region = var.aws_region
  
  # Optional but recommended in production:
  # default_tags {
  #   tags = {
  #     Environment = "dev"
  #     Project     = "pipeline"
  #   }
  # }
}

terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  }
} 