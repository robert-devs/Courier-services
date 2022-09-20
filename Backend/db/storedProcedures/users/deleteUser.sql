GO

CREATE OR ALTER PROCEDURE deleteUser
    (
    @id VARCHAR(100)
)
AS
BEGIN
    DELETE FROM dbo.users
    WHERE id = @id
END