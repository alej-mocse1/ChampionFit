import {sequelize} from './src/db';
import app from './src/app';
import dotenv from 'dotenv';

dotenv.config();
const {API_PORT} = process.env


sequelize
 .sync({force: true, logging: false})
 .then(() => {
  console.log('base de datos conectada! :D');
  app.listen(3001, function () {
   console.log(`App is listening on port ${API_PORT}!`);
  });
 })
 .catch((err) => console.error(err));