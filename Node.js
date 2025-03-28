const express = require('express');
const { Sequelize } = require('sequelize');


const app = express();
const PORT = process.env.PORT || 5000; 


const sequelize = new Sequelize("tugas-tcc", "root", "", {
  host: "34.60.241.181",
  dialect: "mysql",
});


async function testConnection() {
  try {
    await sequelize.authenticate();
    console.log("Database connected!");
  } catch (error) {
    console.error("Database connection failed:", error);
  }
}


app.get('/', (req, res) => {
  res.send('Server is running! Database connection: ' + (sequelize ? 'Active' : 'Inactive'));
});


app.listen(PORT, '0.0.0.0', async () => {
  console.log(`Server running on http://0.0.0.0:${PORT}`);
  await testConnection(); 
});
