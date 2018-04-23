let express = require('express');
let session = require('express-session');
let bodyParser = require('body-parser');

let app = express();

//moteur de template
app.set('view engine', 'ejs');
//pour static ressources url
app.use('/assets', express.static('public'));
//middlewares
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//routes
app.get('/', (request, response) => {
    response.render('welcome');
});

app.get('/register', (request, response) => {
    response.render('auth/register');
});

app.post('/register', (request, response) => {
    let User = require('./models/user');
    let userInfo = {
      username: request.body.username,
      email: request.body.email,
      password: request.body.password
    }
    User.create(userInfo, () => {
      response.redirect('/');
    })
});


//server port
app.listen(8080);
