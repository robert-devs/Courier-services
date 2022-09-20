CREATE OR ALTER PROCEDURE updateUser(
    @id VARCHAR(100),
    @name VARCHAR(100),
    @address VARCHAR(100),
    @phone VARCHAR(100)
)
AS
BEGIN
    UPDATE users SET 
    name = @name,
    address = @address,
    phone =@phone
    WHERE id = @id
END