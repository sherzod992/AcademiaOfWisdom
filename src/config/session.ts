import session from 'express-session';
import ConnectMongoDB from 'connect-mongodb-session';
import dotenv from 'dotenv';

dotenv.config();

const MongoDBStore = ConnectMongoDB(session);

const store = new MongoDBStore({
  uri: String(process.env.MONGO_URI),
  collection: 'sessions',
});

const sessionMiddleware = session({
  secret: String(process.env.SESSION_SECRET),
  cookie: { maxAge: 1000 * 3600 * 3 },
  store: store,
  resave: true,
  saveUninitialized: true,
});

export default sessionMiddleware;
