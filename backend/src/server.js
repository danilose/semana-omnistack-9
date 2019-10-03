const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

const routes = require('./routes');

const app = express();

mongoose.connect('mongodb+srv://dbUserDan:UOqiLCVv8OstbdHD@cluster0-wavfp.mongodb.net/semana09?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

// GET, POST, PUT, DELETE

// req.query = acessar query params (para filtros)
// req.params = acessar route params (para edição, delete)
// req.body = acessar corpo da requisição

/*
app.get('/', (req, res) => {
  return res.send('Hello World');
});

app.get('/users', (req, res) => {
  return res.json({message: 'Hello World'});
});

app.get('/users', (req, res) => {
  return res.json({idade: req.query.idade});
});

app.put('/users/:id', (req, res) => {
  return res.json({id: req.params.id});
});
*/
app.use(cors());
app.use(express.json());
app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads')));
app.use(routes);

app.listen(3333);