const express = require("express");
const cors = require("cors");
const { Pool } = require("pg");

const app = express();

app.use(cors());
app.use(express.json());

const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
});

app.get("/recipes", async (req, res) => {
    try {
        const result = await pool.query(`
            SELECT
                r.id,
                r.title,
                r.calories,
                r.time,
                r.image,
                ARRAY_AGG(t.name ORDER BY t.name) AS tags
            FROM recipes r
            JOIN recipe_tags rt
                ON r.id = rt.recipe_id
            JOIN tags t
                ON rt.tag_id = t.id
            GROUP BY r.id
            ORDER BY r.id;
        `);

        res.json(result.rows);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Database error" });
    }
});
const PORT = 3001;
// Start server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});