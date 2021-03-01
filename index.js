const express = require('express');

const app = express();

require('./apis/file_uploader/file_uploader')(app);

const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=>console.log(`example app listening at ${PORT}`));