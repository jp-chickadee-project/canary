import 'reflect-metadata';

import { createConnection } from 'typeorm';

import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as cors from 'cors';
import { keyBy } from 'lodash';

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

import {
  Bird,
  Feeder,
  Visit,
} from './entity';

import {
  Feeders,
} from 'jpcp-models';

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

    app.get('/api/feeders', (req, res) => {
      feeders.find()
        .then(list => {
          const map: Feeders = keyBy(list, 'id');
          res.json(map);
        })
        .catch(error => console.log(error));
    });

    app.get('/api/feeders/:id', (req, res) => {
      const id: string = req.params.id;
      feeders.findOne(id)
        .then(feeders => res.json(feeders))
        .catch(error => console.log(error));
    });
    
    app.get('/api/visits', (req, res) => {
      visits.find({ take: 50 })
        .then((visits) => res.json(visits))
        .catch(error => console.log(error));
    });
    
    const port = 8156;
    app.listen(port, () => {
      console.log(`running on http://localhost:${port}/`);
    });
  })
  .catch(error => console.log(error));
