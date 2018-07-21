import 'reflect-metadata';

import { createConnection, getRepository } from 'typeorm';

import {
  Bird,
  Feeder,
  Visit,
} from './entity';

const Birds = getRepository(Bird);
const Feeders = getRepository(Feeder);
const Visits = getRepository(Visit);

export {
  Birds,
  Feeders,
  Visits,
};

export {
  createConnection,
};
