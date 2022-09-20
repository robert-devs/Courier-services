CREATE OR ALTER PROCEDURE getUsers
AS
BEGIN
    SELECT id, email, address, phone, name, role
    FROM dbo.users
END
GO




