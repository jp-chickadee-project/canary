
import { Entity, PrimaryColumn, Column } from 'typeorm';

// TODO make some nice default values, or make them required.

@Entity({name: 'feeders'})
export class Feeder {
  @PrimaryColumn({ type: 'char', length: 4, }) id: string;
  @Column({ type: 'varchar', length: 64, nullable: false, }) fullName: string;
  @Column({ type: 'double', }) latitude: number;
  @Column({ type: 'double', }) longitude: number;
  @Column({ type: 'tinyint', precision: 1, }) isSynced: string;
}
