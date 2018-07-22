import 'reflect-metadata';

import { createConnection } from 'typeorm';

import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as cors from 'cors';
import { keyBy, map } from 'lodash';

import {
  Bird,
  Feeder,
  Visit,
} from './entity';

import {
  Bird as IBird,
  Birds,
  Feeders,
  species,
  sex
} from 'jpcp-models';

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
    const birds = connection.getRepository(Bird);
    const feeders = connection.getRepository(Feeder);
    const visits = connection.getRepository(Visit);

    app.get('/api/health', (req, res) => {
      res.write('hello');
      res.end();
    });

    app.get('/api/birds', (req, res) => {
      birds.find()
        .then(response => {
          const formattedBirds = map(response, formatBird);
          const formatted: Birds = keyBy(formattedBirds, 'id');
          res.json(formatted);
        })
        .catch(error => console.log(error));
    });

    app.get('/api/birds/:rfid', (req, res) => {
      const rfid: string = req.params.rfid;
      birds.findOne(rfid)
        .then(response => {
          const formatted: IBird = formatBird(response);
          res.json(formatted);
        })
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
        .then(response => res.json(response))
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

  function formatBird(bird: Bird): IBird {
    return {
      id: bird.rfid,
      bandCombo: bird.bandCombo,
      biometrics: {
        species: bird.species as species,
        sex: bird.suspectedSex as sex,
        bib: bird.bibWidth,
        bill: {
          depth: bird.billDepth,
          width: bird.billWidth,
          length: bird.billLength,
        },
        tarsus: bird.tarsusLength,
        cap: bird.capLength,
        longestSecondary: bird.longestSecondary,
        wingChord: bird.wingChordLength,
        tail: bird.tailLength,
        weight: bird.birdWeight,
      },
      details: {
        banders: bird.banders,
        weather: bird.weather,
        notes: bird.notes,
        tissueSample: bird.tissueSample,
        captureSite: bird.captureSite,
        bandNumber: bird.bandNumber,
        timestamps: {
          log: bird.logTimestamp,
          capture: bird.captureTimestamp,
          enter: bird.netEnterTimestamp,
          exit: bird.netExitTimestamp,
          release: bird.releasedTimestamp,
        },
      },
    };
  }
