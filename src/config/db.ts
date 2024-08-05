import { Sequelize } from 'sequelize-typescript';
import env from 'dotenv';
import { Tableusers } from '../models/tableUsers'; // Asegúrate de importar los modelos correctamente
import { medications } from '../models/tableMedications';
import { Patients } from '../models/tablePatients';

env.config();

const sequelize = new Sequelize({
  dialect: 'mysql',
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  models: [Tableusers, medications, Patients], // Asegúrate de tener los modelos correctamente importados
});

export default sequelize;
