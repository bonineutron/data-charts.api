import dotenv from 'dotenv';
import mysql from 'mysql2';

dotenv.config();

const config = {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASS
};

const mysqlConnection = mysql.createConnection(config);

mysqlConnection.connect((err) => {
  if (err) {
    console.log('error connection', err);
    return;
  } else {
    console.log('db is connected');
  }
});

export default mysqlConnection;
