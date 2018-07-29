
## Birds

A **bird** resource contains information about a bird.

### Representation

#### Bird
```javascript
{
  "id": string,
  "bandCombo": string,
  "rfid": string,
  "biometrics": Biometrics,
  "details": Details
}
```
#### Biometrics
```javascript
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
```
#### Details
```javascript
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
### Read
```GET /api/birds```
Since a collection of birds do not have an order in relation to each other, by default they are returned as a `Dictionary` of `Bird`s.
{
  (id): Bird
}