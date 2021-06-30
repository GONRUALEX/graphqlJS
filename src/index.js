import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import { buildSchema } from 'graphql';
import schema from "./schema";
import { connect } from "./database";



 
var app = express();

connect();

app.get("/",(req,res)=>{res.json({message:"hola"})})

app.use('/graphql', graphqlHTTP({
  schema: schema,
  graphiql: true,
  context:{
      messageId:'test'
  }
}));
app.listen(4000, () => console.log('Now browse to localhost:4000/graphql'));