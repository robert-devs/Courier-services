USE SendIT;
GO

CREATE OR ALTER PROCEDURE getUserById
    (
    @id VARCHAR(100)
)
AS
BEGIN
    SELECT id, email, role, address, name, phone
    FROM dbo.users
    WHERE id = @id
END
