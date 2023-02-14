import express , {Application} from 'express';
import router from './routes/routes';
import morgan from 'morgan';




const app: Application = express();

//setings
app.set("port",4000);


//midelwares
app.use(morgan('dev'));


//routes
app.use(router);

export default app;