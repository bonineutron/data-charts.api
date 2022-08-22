import pkg from '../package.json';
import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';
import cors from 'cors';

const app = express();
const corsOptions = {
  origin: '*', // all domains
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
};

// settings
app.use(helmet());
app.set('pkg', pkg);
app.set('port', 3001);
app.use(morgan('dev'));
app.use(express.json());
app.set('json spaces', 2);
app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: false }));

// initial route
app.get('/', (req, res) => {
  res.json({
    message: 'Wellcome to data-charts.api',
    name: app.get('pkg').name,
    version: app.get('pkg').version,
    description: app.get('pkg').description,
    author: app.get('pkg').author
  });
});

// routes

export default app;
