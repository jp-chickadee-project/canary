
## Feeders

A **feeder** resource contains information about bird feeder.

### Representation
```javascript
{
  "id": string,
  "rfid": string,
  "name": string,
  "location": {
    "latitude": number,
    "longitude": number
  }
}
```

`GET /api/feeders`
Since feeders do not have an order in relation each other, by default they are returned as a `Dictionary` of `Feeder`s.

```javascript
{
  "id_a": Feeder,
  "id_b": Feeder,
  "id_c": Feeder
}
```

