# DynamoDB Table
resource "aws_dynamodb_table" "dev_users" {
  name           = "dev_users"
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
    Environment = "dev"
    Project     = "video-streaming-app"
  }
}

# Initial Users
resource "aws_dynamodb_table_item" "user_1" {
  table_name = aws_dynamodb_table.dev_users.name
  hash_key   = "user_id"

  item = jsonencode({
    user_id = { S = "001" }
    name    = { S = "Alice Smith" }
    team    = { S = "Reds" }
  })
}

resource "aws_dynamodb_table_item" "user_2" {
  table_name = aws_dynamodb_table.dev_users.name
  hash_key   = "user_id"

  item = jsonencode({
    user_id = { S = "002" }
    name    = { S = "Bob Johnson" }
    team    = { S = "Reds" }
  })
}

resource "aws_dynamodb_table_item" "user_3" {
  table_name = aws_dynamodb_table.dev_users.name
  hash_key   = "user_id"

  item = jsonencode({
    user_id = { S = "003" }
    name    = { S = "Carol Williams" }
    team    = { S = "blues" }
  })
}
