
import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity('visits')
export class Visit {

  @PrimaryGeneratedColumn() private id: number;
  // TODO: make migration for auto id.
  // TODO: how is this table sorted?
  // TODO: not sure if bird and feeder should be foreign keys because then we would lose ghost reads 

  @Column({ type: 'varchar', length: 16, }) bird: string;
  @Column({ type: 'char', length: 4, }) feeder: string;

  @Column({ type: 'bigint', precision: 20, nullable: false, }) timestamp: number;

  @Column({ type: 'varchar', length: 32, }) bandCombo: string;
}
