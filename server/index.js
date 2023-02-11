import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';

import postRoutes from './routes/posts.js';

const app = express();
app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());

app.use('/posts', postRoutes)

const DB_CONNECTION_URL =
  "mongodb://ahmedelkassas:mE3HKshwn7EJnxKo@ac-rrub214-shard-00-00.oanvxnx.mongodb.net:27017,ac-rrub214-shard-00-01.oanvxnx.mongodb.net:27017,ac-rrub214-shard-00-02.oanvxnx.mongodb.net:27017/?ssl=true&replicaSet=atlas-gjd6kr-shard-0&authSource=admin&retryWrites=true&w=majority";

const PORT = process.env.PORT || 8000;

mongoose
  .connect(DB_CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => console.log(error.message));

// mongoose.set("useFindAndModify", false);
mongoose.set('strictQuery', false);