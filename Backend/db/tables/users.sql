USE SendIT
CREATE TABLE users
(
    id VARCHAR(100) NOT NULL PRIMARY KEY,
    address VARCHAR(100) NOT NULL ,
    email VARCHAR(100) NOT NULL UNIQUE,
    name VARCHAR(100) NOT NULL,
    password VARCHAR(100) NOT NULL,
    role VARCHAR(100) NOT NULL,
    phone VARCHAR(100) NOT NULL,
    issent VARCHAR(5) DEFAULT('0'),
)
GO


SELECT*
FROM dbo.users

drop table users

select *
from users

UPDATE dbo.users
SET role='Admin' WHERE id='8ff297e6-9029-445a-89e9-3f7914e151ee'