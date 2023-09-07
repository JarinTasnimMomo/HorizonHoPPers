async function run(query) {
    try {
        const connection = await oracledb.getConnection({
            user: "TRAVELERS",
            password: "12345",
            connectionString: "127.0.0.1/orclpdb"
        });

        const result = await connection.execute(query);

        await connection.close();

        return result.rows; // Return the rows from the query result
    } catch (error) {
        console.error("Error:", error);
        throw error; // Rethrow the error for handling in your Express routes
    }
}