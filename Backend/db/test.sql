CREATE TABLE Orders
(
    id VARCHAR(100) PRIMARY KEY NOT NULL,
    userId VARCHAR(100) NOT NULL FOREIGN KEY REFERENCES users(id),
    name VARCHAR(100) not NULL,
    weight VARCHAR(100),
    address VARCHAR(100),
    destination VARCHAR(100) NOT NULL,
    price VARCHAR(100),
    datetime VARCHAR(100) NOT NULL,
    issent VARCHAR(5),
)
DROP TABLE Orders


-- create orders
-- CREATE or ALTER PROCEDURE createOrders
--     (
--     @id VARCHAR(100),
--     @userId VARCHAR(100),
--     @name VARCHAR(100),
--     @weight VARCHAR(100),
--     @address VARCHAR(100),
--     @price VARCHAR(100),
--     @destination VARCHAR(100),
--     @datetime VARCHAR(100)
-- )
-- AS
-- BEGIN
--     INSERT INTO  Orders
--         (id, userId, name, weight, address, destination,price,datetime, issent)
--     VALUES
--         (@id, @userId, @name, @weight,@address,@destination,@price,@datetime, '0')
-- END


-- SELECT*
-- FROM Orders






-- //////SENDIT

-- CREATE OR ALTER PROCEDURE createUser(
--     @id VARCHAR(100),
--     @name VARCHAR(100),
--     @email VARCHAR(100),
--     @password VARCHAR(100),
--     @phone VARCHAR(100),
--     @address VARCHAR(100)
-- )
-- AS
-- BEGIN
--     INSERT INTO usersTamble
--         (id, name, email, phone, address, password)

DROP TABLE users