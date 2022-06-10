import express from 'express';
import 'dotenv/config'; // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
import { graphqlHTTP } from 'express-graphql';
import 'colors';
import schema from './schema/schema';
import { connectDB } from './config/db';

const app = express();

// Connect to database
connectDB();

const PORT = process.env.PORT || 5000;

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === 'development',
  })
);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
