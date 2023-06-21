import 'dotenv/config'
import express from 'express';
import bodyParser from "body-parser";
import cors from 'cors';
import routes from './src/routes/routes.js'

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(routes)

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})