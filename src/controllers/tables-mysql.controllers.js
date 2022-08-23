import { selectAll } from '../database/tables-queries';

export async function selectAllTables(req, res) {
  try {
    const { table } = req.body;
    const getAllActivities = await selectAll(table).catch((err) => {
      return res.status(400).json(err);
    });
    return res.json(getAllActivities);
  } catch (err) {
    console.log(err);
  }
}
