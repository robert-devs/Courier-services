
CREATE OR ALTER PROCEDURE getParcelsByUserId
    (
    @userId VARCHAR(100)
)
AS
BEGIN
    SELECT
        users.name uname ,
        parcels.id parcelId,
        parcels.userId,
        parcels.name pname,
        parcels.destination,
        parcels.datetime,
        parcels.status,
        parcels.weight,
        parcels.price
    FROM users
        INNER JOIN parcels
        ON users.id =parcels.userId
    WHERE parcels.userId = @userId
END