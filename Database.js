import { Sequelize } from "sequelize";

// Nyambungin db ke BE
const db = new Sequelize("tugas-tcc", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

export default db;
