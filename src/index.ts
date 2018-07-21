import 'reflect-metadata';

import { createConnection, Repository, Connection } from 'typeorm';

import {
  Bird,
  Feeder,
  Visit,
} from './entity';

function connect(stuff) {
  stuff.entities = [
    __dirname + '/entity/'
  ];
  return createConnection(stuff);
}

export {
  Bird,
  Feeder,
  Visit,
  Repository,
  connect,
};
