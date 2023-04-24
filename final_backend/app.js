const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const path = require('path');



// Database
const db = require ('./config/database');

//Test dataBase
db.authenticate()
  .then(() => console.log('Connection has been established successfully.'))
  .catch(err => console.log('Unable to connect to the database:', err));

  /*try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }*/

const app = express();

//app.engine('handlebars', exphbs({defaultLayout:'main'}));
//app.set('view engine', 'handlebars');

app.get ('/', (req, res) => res.send('INDEX'));

// Employee routes
app.use('/employees', require('./routes/employees'));

const PORT = process.env.PORT || 5555; 


app.listen(PORT, console.log('Server started on port ' + PORT));
