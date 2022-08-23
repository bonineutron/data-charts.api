import DB from './database';

export async function selectAll(table) {
  return new Promise((resolve, reject) => {
    DB.query(`SELECT * FROM ${table};`, (error, results) => {
      if (error) {
        return reject(error);
      }
      return resolve(results);
    });
  });
}
