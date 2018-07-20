import 'reflect-metadata';
import { createConnection } from 'typeorm';
import { Feeder } from './entity/Feeder';

createConnection().then(async connection => {

  console.log("Inserting a new feeder into the database...");
  const feeder = new Feeder();
  feeder.id = 'WEST';
  feeder.name = 'West';
  feeder.latitude = 12.1232;
  feeder.longitude = 13.3333;

  await connection.manager.save(feeder);
  console.log("Saved a new user with id: " + feeder.id);

  console.log("Loading users from the database...");
  const feeders = await connection.manager.find(Feeder);
  console.log("Loaded users: ", feeders);

}).catch(error => console.log(error));
