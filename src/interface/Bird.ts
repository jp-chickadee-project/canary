
export type species = 'RBNU' | 'something-else';
export type sex = 'male' | 'female' | 'unknown';

export interface Bird {
  id: string;
  bandCombo: string;
  biometrics: Biometrics;
  details: Details;
}

export interface Biometrics {
  species: species;
  sex: sex;
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
    release: number;
  };
}
