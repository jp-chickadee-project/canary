

## Visits
| Verb | Endpoint | Returns |
|-|-|-|
| GET | /api/visits | List of visits (limit 50) |

## Birds
| Verb | Endpoint | Returns |
|-|-|-|
| GET | /api/birds | List of all birds |
| GET | /api/birds/:rfid | The bird |

## Feeders
| Verb | Endpoint | Returns |
|-|-|-|
| GET | /api/feeders | List of all feeders |
| GET | /api/feeders/:id | The feeder |   

notes:

start MySQL:
sudo /etc/init.d/mysql start
mysql -u root -p

mysql dbname < chickadees.sql
OR
mysql -u root -p jpcp_dev < chickadees.sql
OR
mysql -u root -p jpcp_dev < src/migration/initial-create.sql
mysql -u root -p jpcp_dev < src/migration/chickadees.sql (NOT TRACKED)
