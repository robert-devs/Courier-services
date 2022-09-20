CREATE TABLE parcels
(
    id VARCHAR(100) PRIMARY KEY NOT NULL,
    userId VARCHAR(100) NOT NULL FOREIGN KEY REFERENCES users(id),
    name VARCHAR(100) not NULL,
    weight VARCHAR(100) not NULL,
    address VARCHAR(100) not NULL,
    destination VARCHAR(100) NOT NULL,
    price VARCHAR(100) not NULL,
    datetime VARCHAR(100) NOT NULL,
    issent VARCHAR(5) DEFAULT('0'),
    status VARCHAR(20) DEFAULT('pending')

)

SELECT *
from parcels


drop table parcels