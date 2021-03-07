# news-analyzer-wq-yang

temporary AWS page: http://wqyang-ec500-project2.us-east-1.elasticbeanstalk.com

## APIs

- upload a file: POST /file
- get file info: GET /file/TOKEN
- get file content: GET /file/TOKEN/content
- update file content: PUT /file/TOKEN/content
- delete file: DELETE /file/TOKEN

## Features
- support uploading files, storing files in S3 storage
- 

## TODO
- add database to store file basic info
- file ingester, add more info to db
- login module
