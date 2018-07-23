
import { Entity, PrimaryColumn, Column, AfterLoad } from 'typeorm';

@Entity({name: 'birds'})
export class Bird {

  @PrimaryColumn({ type: 'varchar', length: 16, }) rfid: string;

  @Column({ type: 'varchar', length: 8, nullable: true, }) species: string;

  @Column({ type: 'varchar', length: 64, nullable: true, }) captureSite: string;
  @Column({ type: 'varchar', length: 64, nullable: true, }) bandNumber: string;

  @Column({ type: 'varchar', length: 8, nullable: true, }) legRightTop: string;
  @Column({ type: 'varchar', length: 8, nullable: true, }) legRightBottom: string;
  @Column({ type: 'varchar', length: 8, nullable: true, }) legLeftTop: string;
  @Column({ type: 'varchar', length: 8, nullable: true, }) legLeftBottom: string;

  @Column({ type: 'int', precision: 10, nullable: true, }) tailLength: number;
  @Column({ type: 'int', precision: 10, nullable: true, }) wingChordLength: number;
  @Column({ type: 'int', precision: 10, nullable: true, }) longestSecondary: number;

  @Column({ type: 'decimal', precision: 5, scale: 2, nullable: true, }) billDepth: number;
  @Column({ type: 'decimal', precision: 5, scale: 2, nullable: true, }) billWidth: number;
  @Column({ type: 'decimal', precision: 5, scale: 2, nullable: true, }) billLength: number;
  @Column({ type: 'decimal', precision: 5, scale: 2, nullable: true, }) bibWidth: number;
  @Column({ type: 'decimal', precision: 5, scale: 2, nullable: true, }) capLength: number;
  @Column({ type: 'decimal', precision: 5, scale: 2, nullable: true, }) tarsusLength: number;

  @Column({ type: 'decimal', precision: 10, scale: 4, nullable: true, }) bagWeight: number;
  @Column({ type: 'decimal', precision: 10, scale: 4, nullable: true, }) bagAndBirdWeight: number;
  @Column({ type: 'decimal', precision: 10, scale: 4, nullable: true, }) birdWeight: number;

  @Column({ type: 'varchar', length: 32, nullable: true, }) tissueSample: string;

  @Column({ type: 'varchar', length: 16, nullable: true, }) suspectedSex: string;

  @Column({ type: 'bigint', precision: 20, nullable: true, }) logTimestamp: number;
  @Column({ type: 'bigint', precision: 20, nullable: true, }) captureTimestamp: number;
  @Column({ type: 'bigint', precision: 20, nullable: true, }) netEnterTimestamp: number;
  @Column({ type: 'bigint', precision: 20, nullable: true, }) netExitTimestamp: number;
  @Column({ type: 'bigint', precision: 20, nullable: true, }) releasedTimestamp: number;

  @Column({ type: 'varchar', length: 256, nullable: true, }) notes: string;
  @Column({ type: 'varchar', length: 256, nullable: true, }) weather: string;

  @Column({ type: 'varchar', length: 64, nullable: true, }) banders: string;

  @Column({ type: 'varchar', length: 32, nullable: true, }) bandCombo: string;

  @AfterLoad()
  parse() {
    this.billDepth = parseFloat(this.billDepth as any);
    this.billWidth = parseFloat(this.billWidth as any);
    this.billLength = parseFloat(this.billLength as any);

    this.bibWidth = parseFloat(this.bibWidth as any);
    this.capLength = parseFloat(this.capLength as any);
    this.tarsusLength = parseFloat(this.tarsusLength as any);

    this.birdWeight = parseFloat(this.birdWeight as any);
    this.bagAndBirdWeight = parseFloat(this.bagAndBirdWeight as any);
    this.bagWeight = parseFloat(this.bagWeight as any);

    this.captureTimestamp = parseFloat(this.captureTimestamp as any);
    this.logTimestamp = parseFloat(this.logTimestamp as any);
    this.netEnterTimestamp = parseFloat(this.netEnterTimestamp as any);
    this.netExitTimestamp = parseFloat(this.netExitTimestamp as any);
    this.releasedTimestamp = parseFloat(this.releasedTimestamp as any);
  }
}
