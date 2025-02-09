variable "aws_region" {
  description = "AWS region"
  type        = string
  default     = "us-west-2"  # You can change this default value
}

variable "github_connection_arn" {
  description = "ARN of the GitHub connection created in AWS CodeStar"
  type        = string
}

variable "github_owner" {
  description = "GitHub owner/organization name"
  type        = string
  default     = "mattjoman"
}

variable "github_repo" {
  description = "GitHub repository name"
  type        = string
  default     = "video-streaming"
}


variable "github_branch" {
  description = "GitHub branch name"
  type        = string
  default     = "main"
} 