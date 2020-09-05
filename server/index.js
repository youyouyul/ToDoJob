const express = require('express');
const app = express();
const config = require('./config/key');
const path = require('path');
const port = 5000;

const cors = require('cors');
const cookieParser = require('cookie-parser');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

const mongoose = require('mongoose');

mongoose.connect(config.mongoURI, {
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: true
}).then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err));

app.use('/api/users', require('./routes/users'));
app.use('/api/todos', require('./routes/todoList'));
app.use('/api/cards', require('./routes/cards'));

app.get("*", (req, res) => {
  res.sendFile(path.resolve(___dirname, "../client", "build", "index.html"));
});

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));