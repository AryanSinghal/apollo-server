import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import * as bodyParser from 'body-parser';
import { createServer } from 'http';
import cors from 'cors';
import schema from './modules';

class Server {
  constructor(config) {
    this.config = config;
    this.app = express();
  }

  bootstrap = () => {
    this._initBodyParser();
    this._initCors();
    return this;
  }

  run = () => {
    const { httpServer, config: { port } } = this;
    httpServer.listen(port, (err) => {
      if (err) {
        console.log(err);
      }
      console.log(`Express app Successfully started on port : ${port} `);
    });
    return this;
  }

  _initBodyParser = () => {
    const { app } = this;
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());
  }

  _initCors = () => {
    this.app.use(cors());
  }

  setupApollo = () => {
    const { app } = this;
    this.server = new ApolloServer(schema);
    this.server.applyMiddleware({ app });
    this.httpServer = createServer(app);
    this.server.installSubscriptionHandlers(this.httpServer);
    this.run();
  }
}

export default Server;
