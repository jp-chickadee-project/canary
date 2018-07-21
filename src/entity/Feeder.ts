
import { Entity, PrimaryColumn, Column } from 'typeorm';

// TODO make some nice default values, or make them required.

@Entity({name: 'feeders'})
export class Feeder {

  @PrimaryColumn({
    type: 'char',
    length: 4,
  })
  id: string;

  @Column({
    name: 'fullName',
    type: 'varchar',
    length: 64,
  })
  name: string;

  @Column({
    type: 'decimal',
    precision: 10,
    scale: 7,
  })
  latitude: number;

  @Column({
    type: 'decimal',
    precision: 10,
    scale: 7,
  })
  longitude: number;
}
