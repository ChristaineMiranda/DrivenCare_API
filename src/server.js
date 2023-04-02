import express from 'express';
import cors from 'cors';
import 'express-async-errors';
import routes from './routes/index.js';
import errorHandlingMiddleware from './middlewares/errorHandlingMiddleware.js';



const server = express();

server.use(express.json());
server.use(cors());
server.use(routes);
server.use(errorHandlingMiddleware);


const port = process.env.PORT || 5000;
server.listen(port, () => {
    console.log(`Server running in port ${port}`);
})