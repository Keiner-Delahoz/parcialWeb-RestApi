import { createPool } from 'mysql2/promise';

export const pool = createPool({ //Equivalente al createConnection
   host: 'localhost',
   user: 'root',
   password: '12345',
   port: 3306,
   database: 'vehiculodb'
});
