resource "aws_cloudwatch_log_group" "ecs_log_group" {
  name = "ecs_twitsy"
}

resource "aws_ecs_cluster" "twitsy_ecs_log_config" {
  name = "twitsy_cluster"

  configuration {
    execute_command_configuration {
      //            kms_key_id = aws_kms_key.ecs_kms_key.arn
      logging = "OVERRIDE"

      log_configuration {
        cloud_watch_encryption_enabled = true
        cloud_watch_log_group_name     = aws_cloudwatch_log_group.ecs_log_group.name
      }
    }
  }
}

/*  # it will charge on aws
resource "aws_kms_key" "ecs_kms_key" {
    description = "ecs-kms-key"
    deletion_window_in_days = 7
}
*/
