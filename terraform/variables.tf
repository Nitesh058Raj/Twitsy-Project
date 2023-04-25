variable "REPO_NAME" {
  type        = string
  default = "" # if var is not provided it will be = ""
}

variable "TAG" {
  type        = string
  default = "" 
}

variable "AWS_ACCESS_KEY_ID" {
  type        = string
  default = ""
}

variable "AWS_SECRET_ACCESS_KEY" {
  type        = string
  default = ""
}
