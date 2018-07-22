
import { Entity, PrimaryColumn, Column } from 'typeorm';

// TODO make some nice default values, or make them required.

@Entity({name: 'feeders'})
export class Feeder {
  @PrimaryColumn({ type: 'char', length: 4, }) id: string;
  @Column({ name: 'fullName', type: 'varchar', length: 64, }) name: string;
  @Column({ type: 'double', }) latitude: number;
  @Column({ type: 'double', }) longitude: number;
}
