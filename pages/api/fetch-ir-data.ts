import type { NextApiRequest, NextApiResponse } from "next";
import mysql from "mysql2";

export default function getData(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  });
  db.query("SELECT * FROM ir", (err, results) => {
    if (err) {
      res.status(500).json({ error: err.message, data: null });
      db.end();
      return;
    } else {
      res.status(200).json({ error: null, data: results });
      db.end();
      return;
    }
  });
}
