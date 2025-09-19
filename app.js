import express from 'express';

const PORT = 5050;
const app = express();

app.use(express.json());

let customers = [
    {id: 1, name: "Patrik", email: "test.pat@gmail.com"},
    {id: 2, name: "Tibi", email: "test.tibi@gmail.com"},
    {id: 3, name: "Józsi", email: "test.jo@gmail.com"},

];
