# Secure File Uploader APIs

## 1. User Stories

- API users should be able to upload files from their local device.
- API users should get a token for each uploaded file so that they can download the file.
- API users should know if the file was uploaded sucessfully or not.
- API users should be able to know statistics about the file. For example, filename, filetype, upload date.
- API users should be able to delete a file they uploaded.
## 2. Procedure-based or Entity-based

Entity-based, because it only needs few operations.

## 3. Operations, Data, and Status

### Data

```json
[
  {
    'id': number,
    'filename': string,
    'uploadTime': date,
    'expireDate': date
	},
  ...
]
```

### Operation

- Creat: POST
- Read: GET
- Update: PUT
- Delete: DELETE

### Status

- Success: 200
- Upload Failure: 
- Invalid Token: