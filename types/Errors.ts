export interface ErrorResponse {
  statusCode: 404 | number
  errorCode: "NotFoundException" | string
  message: string
  timestamp: string
  path: string
}
