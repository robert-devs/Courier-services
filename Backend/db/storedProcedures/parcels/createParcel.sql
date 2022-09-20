CREATE or ALTER PROCEDURE createParcel
    (
    @id VARCHAR(100),
    @userId VARCHAR(100),
    @name VARCHAR(100),
    @weight VARCHAR(100),
    @address VARCHAR(100),
    @destination VARCHAR(100),
    @price VARCHAR(100),
    @datetime VARCHAR(100)
)
AS
BEGIN
    INSERT INTO dbo.parcels
        (id, userId, name, weight, address,destination,price,datetime, issent, status)
    VALUES
        (@id, @userId, @name, @weight, @address, @destination, @price, @datetime, '0', 'pending')
END