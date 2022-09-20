USE users;
GO

CREATE OR ALTER PROCEDURE getUserByEmail
    (
    @email VARCHAR(100)
)
AS
BEGIN
    SELECT *
    FROM users
    WHERE email = @email
END
