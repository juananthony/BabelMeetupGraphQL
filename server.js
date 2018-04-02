import express from 'express';
import config from './config';
import logger from './logger';
import students from './routes/students';
import teachers from './routes/teachers';
import classes from './routes/classes';
import classrooms from './routes/classrooms';
import {graphqlExpress, graphiqlExpress} from 'apollo-server-express';
const server = express();

server.listen(config.server.port, () => {
    console.log("Listening on port " + config.server.port);
});

server.use(logger);

server.use('/students', students);
server.use('/teachers', teachers);
server.use('/classes', classes);
server.use('/classrooms', classrooms);

// GraphQL
server.use('/graphql', graphqlExpress({}));
server.use('/graphiql', graphiqlExpress({
    endpointURL: '/graphql'
}));


server.use(express.static('public'));