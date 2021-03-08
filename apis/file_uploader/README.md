# Secure File Uploader APIs

## 1. User Stories

- API users should be able to upload files from their local device.
- API users should know if the file was uploaded sucessfully or not.
- API users should be able to know statistics about the file. For example, filename, create name, filetype, upload date.
- API users should be able to view their files online, if the file type is supported.
- API users should be able to share their files to other users.
- API users should be able to assign other users permission to read/delete their files.
- API users should be able to delete their files.
- API usres should be able to add/remove tags to their files.
- API users should be able to search file based on filename, tag and content as well, if the file type is supported.
- API users should be able to retrieve NLP entities, sentiment (by cooperating with NLP API)
## 2. Procedure-based or Entity-based

Entity-based, because it only needs few operations.

## 3. Operations, Data, and Status

### Data

1. File Schema

   ```json
   {
     '_id': ID, // identification of a file
     'user_id': USER_ID, // who owns this file
     'filename': FILENAME,
     'filetype': FILETYPE,
     'language': LANGUAGE,
     'content': CONTENT,
     'location': LOCATION,
     'uploadTime': UPLOAD_TIME,
     'createTime': CREATE_TIME,
     'entities': [ENTITY_1, ENTITY_2, ...,],
     'sentiment': [SENTIMENT_1, SENTIMENT_2, ...]
   }
   ```

2. User Schema (should have  `file` field in user's schema, other fields defined in other API )

   ```json
   {
     'id': USER_ID,
     'userName': 
     'files': [TOKEN_1, TOKEN_2, ...]
   }
   ```

   

### Operation

RESTful API

- upload a file: POST /file
- get file info: GET /file/TOKEN
- get file content: GET /file/TOKEN/content
- update file content: PUT /file/TOKEN/content
- delete file: DELETE /file/TOKEN



### Status

- Success: 200
- Upload Failure: 
- Invalid Token: