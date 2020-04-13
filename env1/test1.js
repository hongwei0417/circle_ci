import express from 'express'
import { Server } from 'http'

const app = express();
const port = process.env.PORT || 8080;

var server = Server(app);

app.use(express.json());


server.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});