# news-analyzer-wq-yang

temporary AWS page: http://wqyang-ec500-project2.us-east-1.elasticbeanstalk.com

Only support REST API for now. For example, try: http://wqyang-ec500-project2.us-east-1.elasticbeanstalk.com/file/43534

## APIs

- upload a file: POST /file
- get file info: GET /file/TOKEN
- get file content: GET /file/TOKEN/content
- update file content: PUT /file/TOKEN/content
- delete file: DELETE /file/TOKEN

## TODO
- store file in S3 storage (currently stores in local device)
- add database to store file basic info
- file ingester, add more info to db
- login module
