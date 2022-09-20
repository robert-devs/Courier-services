
CREATE OR ALTER PROCEDURE deleteParcel
    (
    @id VARCHAR(100)
)
AS
BEGIN
    DELETE FROM parcels
    WHERE id = @id
END
GO