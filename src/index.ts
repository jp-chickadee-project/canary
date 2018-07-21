import 'reflect-metadata';
import { createConnection } from 'typeorm';

import { Bird, Feeder, Visit } from './entity';

createConnection().then(async connection => {

  console.log("Loading things from the database...");
  const feeders = await connection.manager.find(Feeder);
  console.log("feeder count: ", feeders.length);

  const birds = await connection.manager.find(Bird);
  console.log("bird count: ", birds.length);

  const visits = await connection.manager.find(Visit);
  console.log("visit count: ", visits.length);

}).catch(error => console.log(error));
