import 'reflect-metadata';

import { createConnection } from 'typeorm';

import * as express from 'express';
import * as bodyParser from 'body-parser';

const app: express.Application = express();

app.use(bodyParser.json());

import {
  Bird,
  Feeder,
  Visit,
} from './entity';

console.log('test');

createConnection()
  .then(async connection => {
    const birds = connection.getRepository(Bird);
    const feeders = connection.getRepository(Feeder);
    const visits = connection.getRepository(Visit);

    app.get('/api/health', (req, res) => {
      res.write('hello');
      res.end();
    });

    app.get('/api/birds', (req, res) => {
      birds.find()
        .then(birds => res.json(birds))
        .catch(error => console.log(error));
    });

    app.get('/api/birds/:rfid', (req, res) => {
      const rfid: string = req.params.rfid;
      birds.findOne(rfid)
        .then(bird => res.json(bird))
        .catch(error => console.log(error));
    });
    
    app.get('/api/visits', (req, res) => {
      visits.find()
        .then((visits) => res.json(visits))
        .catch(error => console.log(error));
    });
    
    const port = 8155;
    app.listen(port, () => {
      console.log(`running on http://localhost:${port}/`);
    });
  })
  .catch(error => console.log(error));
