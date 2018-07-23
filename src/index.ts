import 'reflect-metadata';

import { createConnection } from 'typeorm';

import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as cors from 'cors';

import {
  Bird,
  Feeder,
  Visit,
} from './entity';

const app: express.Application = express();

app.use(bodyParser.json());

app.use(cors());

var whitelist = ['http://localhost:8082', 'http://euclid.nmu.edu']
var corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}

console.log('test');

createConnection()
  .then(async connection => {
    console.log('loading bird repository...');
    const birds = connection.getRepository(Bird);

    console.log('loading feeder repository...');
    const feeders = connection.getRepository(Feeder);

    console.log('loading visit repository...');
    const visits = connection.getRepository(Visit);

    app.get('/api/health', (req, res) => {
      res.write('hello');
      res.end();
    });

    app.get('/api/birds', (req, res) => {
      birds.find()
        .then(response => res.json(response))
        .catch(error => console.log(error));
    });

    app.get('/api/birds/:rfid', (req, res) => {
      const rfid: string = req.params.rfid;
      birds.findOne(rfid)
        .then(response => res.json(response))
        .catch(error => console.log(error));
    });

    app.get('/api/feeders', (req, res) => {
      feeders.find()
        .then(response => res.json(response))
        .catch(error => console.log(error));
    });

    app.get('/api/feeders/:id', (req, res) => {
      const id: string = req.params.id;
      feeders.findOne(id)
        .then(response => res.json(response))
        .catch(error => console.log(error));
    });
    
    app.get('/api/visits', (req, res) => {
      visits.find({ take: 50 })
        .then((visits) => res.json(visits))
        .catch(error => console.log(error));
    });

    app.get('/api/visits/latest', (req, res) => {
      let match = {};
      const rfid: string = req.query.rfid;
      if (rfid) {
        match['rfid'] = rfid;
      }
      const feeder: string = req.query.feederID;
      if (feeder) {
        match['feederID'] = feeder;
      }
      const count: number = req.query.limit
      visits.find({
        take: count,
        where: match,
        order: {
          visitTimestamp: 'DESC',
        }
      })
        .then((visits) => res.json(visits))
        .catch(error => console.log(error));
    });
    
    const port = 36361;
    app.listen(port, () => {
      console.log(`running on http://localhost:${port}/`);
    });
  })
  .catch(error => console.log(error));
