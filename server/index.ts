import express from 'express';
import { config } from 'dotenv';
import { graphqlHTTP } from 'express-graphql';
import schema from './schema/schema';

const app = express();

config();

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
