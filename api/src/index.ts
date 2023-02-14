import app from './app';
const { conn } = require('./db');
const port =  3001


conn.sync({ force: true }).then(() => { 
    app.listen(port, () => {
      console.log("%s listening at " + port); // eslint-disable-line no-console
    });    
  });

// const main = () => {
//     app.listen(port);
//     console.log('server on port ' + port)
// }

// main()

