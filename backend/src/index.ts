

require('dotenv').config();
import express from 'express';
import cors from "cors";
import routes from './routes';

import "./database";
const app = express();
const PORT = 4000;

app.use(
    cors({
      origin: "*"
    })
);
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));


app.use(routes);
app.listen(PORT, () => {

  console.log(`Server is running on port ${PORT}`);
});
