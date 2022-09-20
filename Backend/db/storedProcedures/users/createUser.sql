CREATE OR ALTER PROCEDURE createUser(
    @id VARCHAR(100),
    @name VARCHAR(100),
    @email VARCHAR(100),
    @password VARCHAR(100),
    @role VARCHAR (100),
    @phone VARCHAR(100),
    @address VARCHAR(100)
)
AS
BEGIN
    INSERT INTO dbo.users

        (id,name,email,password,phone,address,role, issent)
    VALUES
        (@id, @name, @email, @password, @phone, @address, @role, '0')
END

