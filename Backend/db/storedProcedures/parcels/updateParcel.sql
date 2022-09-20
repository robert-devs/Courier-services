CREATE OR ALTER PROCEDURE updateParcel
    (
    @id VARCHAR(100),
    @name VARCHAR(100),
    @weight VARCHAR(100),
    @destination VARCHAR(100),
    @address VARCHAR(100),
    @price VARCHAR(100),
    @datetime VARCHAR(100)
)
AS
BEGIN
    UPDATE parcels SET name = @name,weight=@weight,address = @address,price=@price,destination
=@destination,datetime=@datetime WHERE id = @id
END