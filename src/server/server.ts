import * as express from 'express';
import * as path from 'path';
import routes from './routes';

const app = express();

app.use(express.static('public'));
app.use(express.json());
// server side request
app.use('/api', routes);
// enable client side routing
app.get('*', (req,res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'))
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server listening on port: ${port}`));
