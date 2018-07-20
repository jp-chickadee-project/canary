/*
import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity({name: 'birds'})
export class Bird {

  @PrimaryColumn({ type: 'varchar', length: 16, }) rfid: string;

  @Column({ type: 'varchar', length: 8, }) species: string;

  @Column({ type: 'varchar', length: 64, }) captureSite: string;
  @Column({ type: 'varchar', length: 64, }) bandNumber: string;

  @Column({ type: 'varchar', length: 8, }) legRightTop: string;
  @Column({ type: 'varchar', length: 8, }) legRightBottom: string;
  @Column({ type: 'varchar', length: 8, }) legLeftTop: string;
  @Column({ type: 'varchar', length: 8, }) legLeftBottom: string;

  @Column({ type: 'int', precision: 10, }) tailLength: number;
  @Column({ type: 'int', precision: 10, }) wingChordLength: number;
  @Column({ type: 'int', precision: 10, }) longestSecondary: number;

  @Column({ type: 'decimal', precision: 5, scale: 2, }) billDepth: number;
  @Column({ type: 'decimal', precision: 5, scale: 2, }) billWidth: number;
  @Column({ type: 'decimal', precision: 5, scale: 2, }) billLength: number;
  @Column({ type: 'decimal', precision: 5, scale: 2, }) bibWidth: number;
  @Column({ type: 'decimal', precision: 5, scale: 2, }) capLength: number;
  @Column({ type: 'decimal', precision: 5, scale: 2, }) tarsusLength: number;

  @Column({ type: 'decimal', precision: 10, scale: 4, }) bagWeight: number;
  @Column({ type: 'decimal', precision: 10, scale: 4, }) bagAndBirdWeight: number;
  @Column({ type: 'decimal', precision: 10, scale: 4, }) birdWeight: number;

  @Column({ type: 'varchar', length: 32, }) tissueSample: string;

  @Column({ type: 'varchar', length: 16, }) suspectedSex: string;

  @Column({ type: 'bigint', precision: 20, }) logTimestamp: number;
  @Column({ type: 'bigint', precision: 20, }) captureTimestamp: number;
  @Column({ type: 'bigint', precision: 20, }) netEnterTimestamp: number;
  @Column({ type: 'bigint', precision: 20, }) netExitTimestamp: number;
  @Column({ type: 'bigint', precision: 20, }) releasedTimestamp: number;

  @Column({ type: 'varchar', length: 256, }) notes: string;
  @Column({ type: 'varchar', length: 256, }) weather: string;

  @Column({ type: 'varchar', length: 64, }) banders: string;

  @Column({ type: 'varchar', length: 32, }) bandCombo: string;
  
}
*/
