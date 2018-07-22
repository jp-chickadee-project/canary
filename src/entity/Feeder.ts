
import { Entity, PrimaryColumn, Column } from 'typeorm';

// TODO make some nice default values, or make them required.

import { Feeder as IFeeder } from 'jpcp-models';

@Entity({name: 'feeders'})
export class Feeder implements IFeeder {
  @PrimaryColumn({ type: 'char', length: 4, }) id: string;
  @Column() name: string;
  @Column({ type: 'double', }) latitude: number;
  @Column({ type: 'double', }) longitude: number;
}
