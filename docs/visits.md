
## Visits

A **visit** resource contains information about a bird visiting a feeder. If you only need certain properties of the bird and feeder for a visit, you may specify them using the ```fields``` parameter.

### Representation
```javascript
{
  "id": string,
  "bird": Bird,
  "feeder": Feeder,
  "timestamp": datetime
}
```

### Read
```GET /api/visits```
A collection of visits is returned as a list, sorted by most recent.

```javascript
[
  Visit,
  Visit,
  Visit
]
```

### Example

```
www.example.com/api/visits?fields=bird(rfid),feeder(code)
```