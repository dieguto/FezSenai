const express = require('express');
const routes = require('./routes');

require('./database');

const app = express();

app.use(express.json());
app.use(routes);
// app.get("/batata", (req, res) => {
//     res.send("lalala")
// })

app.listen(3333);