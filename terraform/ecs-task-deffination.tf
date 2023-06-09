resource "aws_ecs_task_definition" "twitsy_task_definition" {
  family                   = "task-twitsy"
  execution_role_arn       = aws_iam_role.express_task_role.arn
  network_mode             = "awsvpc"
  cpu                      = "128"
  memory                   = "256"
  requires_compatibilities = ["FARGATE"]

  container_definitions = jsonencode([
    {
      name  = "twitsy-container"
      image = "${var.REPO_NAME}:${var.TAG}"
      portMappings = [
        {
          containerPort = 3000
          protocol      = "tcp"
        }
      ],
      logConfiguration = {
        logDriver = "awslogs",
        options = {
          "awslogs-region"        = "ap-south-1",
          "awslogs-group"         = "ecs_twitsy",
          "awslogs-stream-prefix" = "ecs-"
        }
      }
    }
  ])
}


resource "aws_iam_role" "twitsy_task_role" {
  name = "twitsy-task-role"
  assume_role_policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Action = "sts:AssumeRole"
        Effect = "Allow"
        Principal = {
          Service = "ecs-tasks.amazonaws.com"
        }
      }
    ]
  })
}

resource "aws_iam_role_policy_attachment" "ecs_task_role_policy" {
  policy_arn = "arn:aws:iam::aws:policy/AmazonEC2ContainerRegistryReadOnly"
  role       = aws_iam_role.twitsy_task_role.name
}

resource "aws_iam_role_policy_attachment" "ecs_task_execution_role_policy" {
  policy_arn = "arn:aws:iam::aws:policy/service-role/AmazonECSTaskExecutionRolePolicy"
  role       = aws_iam_role.twitsy_task_role.name
}
