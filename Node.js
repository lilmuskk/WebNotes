const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("tugas-tcc", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

async function testConnection() {
  try {
    await sequelize.authenticate();
    console.log("Database connected successfully!");
  } catch (error) {
    console.error("Database connection failed:", error);
  }
}

testConnection();

