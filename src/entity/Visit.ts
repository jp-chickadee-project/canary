
import { Entity, PrimaryGeneratedColumn, Column, AfterLoad } from 'typeorm';

@Entity('visits')
export class Visit {

  @PrimaryGeneratedColumn() private id: number;
  // TODO: how is this table sorted?
  // TODO: not sure if bird and feeder should be foreign keys because then we would lose ghost reads 

  @Column({ type: 'varchar', length: 16, }) rfid: string;
  @Column({ type: 'char', length: 4, }) feederID: string;

  @Column({ type: 'bigint', precision: 20, nullable: false, }) visitTimestamp: number;
  
  @Column({ type: 'varchar', length:32, }) bandCombo: number;

  @AfterLoad()
  parse() {
    this.visitTimestamp = parseInt(this.visitTimestamp as any, 10);
  }
}
