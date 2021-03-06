# news-analyzer-wq-yang

temporary AWS page: http://wqyang-ec500-project2.us-east-1.elasticbeanstalk.com
- Used Express framework of Node.js for the backend;
- Designed RESTful API for each module;
- Built very basic front end with ReactJS.

## APIs
- File uploader: https://github.com/BUEC500C1/news-analyzer-wq-yang/tree/main/apis/file_uploader
- News digester: https://github.com/BUEC500C1/news-analyzer-wq-yang/tree/main/apis/news_digester
- NLP: https://github.com/BUEC500C1/news-analyzer-wq-yang/tree/main/apis/nlp

## Features
- upload files, storing files in S3 storage
    - upload and click submit button in the index html
- get file basic info(todo)
    - GET /file/id/info
- load file content(todo)
    - GET /file/id/content
- search news based on article title
    - GET /news/keyword
        - example: http://wqyang-ec500-project2.us-east-1.elasticbeanstalk.com/news/election
- analyze entity for article/pdf
    - automatically analyze entity for article/pdf, shows result in console. (todo: store result to MongoDB)

## Screenshots

- nlp analysis only shows in local terminal console currently

  e.g. automatic news analysis

  ![news_nlp](./imgs/news_nlp.png)

- store file metadata to MongoDB

  ![db_file](./imgs/db_file.png)

- store user metadata to MongoDB

  ![db_file](./imgs/db_user.png)

- file stores in S3

  e.g. for user `test_user`, file was stored in `storage/test_user/`

  ![file_storage](./imgs/file_storage.png)

- news

  e.g. search for covid using REST API

  ![news](./imgs/news.png)