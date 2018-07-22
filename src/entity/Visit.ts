
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

import { Visit as IVisit } from 'jpcp-models';

@Entity('visits')
export class Visit implements IVisit<string, string> {

  @PrimaryGeneratedColumn() private id: number;
  // TODO: how is this table sorted?
  // TODO: not sure if bird and feeder should be foreign keys because then we would lose ghost reads 

  @Column({ type: 'varchar', length: 16, }) bird: string;
  @Column({ type: 'char', length: 4, }) feeder: string;

  @Column({ type: 'bigint', precision: 20, nullable: false, }) timestamp: number;
}
