
import { Entity, PrimaryColumn, Column, AfterLoad } from 'typeorm';

@Entity({name: 'feeders'})
export class Feeder {
  @PrimaryColumn({ type: 'char', length: 4, }) id: string;
  @Column() name: string;
  location: { latitude: number, longitude: number };

  @Column({ type: 'double', }) private latitude: number;
  @Column({ type: 'double', }) private longitude: number;

  @AfterLoad()
  parse() {
    this.location = {
      latitude: this.latitude,
      longitude: this.longitude,
    }
    delete this.latitude;
    delete this.longitude;
  }

}
