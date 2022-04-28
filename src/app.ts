import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as cors from 'cors';
import * as logger from 'morgan';

import { conectarServidorNoBD } from './config/db';
import { routerUsuario } from './route/usuario';
import { routerLancamento } from './route/lancamento';

export const app = express();

app.use(cors());

app.use(bodyParser.json());

app.use(logger('dev'));


conectarServidorNoBD();


app.use('/usuario', routerUsuario);
app.use('/lancamento', routerLancamento);
app.use('/', (req, res) => res.send('API do app Julius'));

