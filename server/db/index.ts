import { createPool } from 'mysql2/promise';

interface Options {
  query: string;
  values?: any[];
}

const pool = createPool({
  host: 'localhost',
  user: 'root',
  password: '123456',
  database: 'demo',
});

export const db = async ({ query, values }: Options) => {
  const [rows] = await pool.query(query, values);
  return rows;
};
