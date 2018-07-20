
export interface Measurements {
  bib: number;
  bill: {
    depth: number;
    width: number;
    length: number;
  };
  tarsus: number;
  cap: number;
  longestSecondary: number;
  wingChord: number;
  tail: number;
  weight: number;
}

export interface Details {
  banders: string;
  weather: string;
  notes: string;
  tissueSample: string;
  captureSite: string;
  bandNumber: string;
  timestamps: {
    log: number;
    capture: number;
    enter: number;
    exit: number;
  };
  legRightTop: string;
  legRightBottom: string;
  legLeftTop: string;
  legLeftBottom: string;
}

export type species = 'RBNU' | 'something-else';
export type sex = 'male' | 'female' | 'unknown';

export interface Bird {
  rfid: string;
  bandCombo: string;
  release: number;
  species: species;
  sex: sex;
  measurements?: Measurements;
  details?: Details;
}
