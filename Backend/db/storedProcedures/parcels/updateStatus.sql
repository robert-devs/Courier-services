CREATE OR ALTER PROCEDURE upadteStatus
    (@id VARCHAR(100))
AS
BEGIN
    if EXISTS(SELECT*
    from parcels
    WHERE id = @id)
    BEGIN
        UPDATE parcels SET status = 'delivered'
    END
ELSE
    BEGIN
        RAISERROR('already updated',11,1)
    END
END




