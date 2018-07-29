
## Birds

A **bird** resource contains information about a bird.

### Representation
```javascript
{
  "id": string,
  "bandCombo": string,
  "rfid": string,
  "biometrics": Biometrics,
  "details": Details
}

// Biometrics
{
  "species": string,
  "sex": string,
  "bib": number,
  "bill": {
    "depth": number,
    "width": number,
    "length": number
  },
  "tarsus": number,
  "cap": number,
  "longestSecondary": number,
  "wingChord": number,
  "tail": number,
  "weight": number 
}

// Details
{
  "banders": string,
  "weather": string,
  "notes": string,
  "tissueSample": string,
  "captureSite": string,	
  "bandNumber": string,
  "timestamps": {	
    "log": datetime,
    "capture": datetime,	
    "enter": datetime,
    "exit": datetime,
    "release": datetime,	
  }
}
```