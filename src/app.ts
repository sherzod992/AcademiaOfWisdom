import express from 'express';
import path from 'path';
import morgan from 'morgan';
import session from 'express-session';
import ConnectMongoDB from 'connect-mongodb-session';
import dotenv from 'dotenv';

// config va routerlar
import { MORGAN_FORMAT } from './libs/config';
import routerAdmin from './router-admin/router-admin';

dotenv.config();

// MongoDB Session Store
const MongoDBStore = ConnectMongoDB(session);
const store = new MongoDBStore({
  uri: String(process.env.MONGO_URI),
  collection: 'sessions',
});

/** 1. APP ENTRANCE **/
const app = express();

/** 2. MIDDLEWARES **/

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan(MORGAN_FORMAT));

app.use(session({
  secret: String(process.env.SESSION_SECRET),
  cookie: { maxAge: 1000 * 3600 * 3 },
  store: store,
  resave: true,
  saveUninitialized: true,
}));

/** 3. API ROUTERS **/

app.use('/api/admin', routerAdmin);
// app.use('/api/teacher', routerTeacher);
// app.use('/api/student', routerStudent);

/** 4. SERVE REACT FRONTEND **/

app.use(express.static(path.join(__dirname, 'client', 'build')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
});

/** 5. ERROR HANDLER **/

app.use((req, res) => {
  res.status(404).json({ message: '404 - Not Found' });
});

/** EXPORT **/
export default app;
