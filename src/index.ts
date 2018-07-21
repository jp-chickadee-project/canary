import 'reflect-metadata';

import { createConnection, getRepository, Repository } from 'typeorm';

import {
  Bird,
  Feeder,
  Visit,
} from './entity';

const Birds = getRepository(Bird);
const Feeders = getRepository(Feeder);
const Visits = getRepository(Visit);

export {
  Bird,
  Birds,
  Feeder,
  Feeders,
  Visit,
  Visits,
  Repository,
};

export {
  createConnection,
};
