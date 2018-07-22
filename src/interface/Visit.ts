
import { Bird } from './Bird';
import { Feeder } from 'jpcp-models';

export interface Visit<B = Bird | string, F = Feeder | string> {
  bird: B;
  feeder: F;
  timestamp: number;
}


/* thoughts:
http://localhost:8155/api/visits?populate=true
*/

const x: Visit<string, string> = {
  bird: 'yes',
  feeder: 'feeder',
  timestamp: 1,
}

