# Create a full-stack MERN Application
Movie management app with MongoDB, Express, React, and Node.js  
https://medium.com/swlh/how-to-create-your-first-mern-mongodb-express-js-react-js-and-node-js-stack-7e8b20463e66  

## Server Side

1. Inside `server` folder create `package.json` and install dependencies
```bash
$ npm init -y
$ npm install express body-parser cors mongoose nodemon
```
2. Create the root level `index.js`. Initiate an express instance and run the server with `app.listen(PORT,cb)`.  
  Start the application with `nodemon`. It restarts the server every time it sees changes in any of the file of our project.
```
$nodemon index.js
```

3. Start `mongod` process inside the local machine and create `cinema` database.
```
$mongod --config /usr/local/etc/mongod.conf

#run this from another terminal window
$mongo
>use cinema
```

4. Create connection from our server to the db with `mongoose.connect`at `/server/db/index.js`.  
  Require the mongoose connection instance from the root `index.js` file (that is currently running with nodemon).
```js
const mongoose = require('mongoose');

mongoose
    .connect('mongodb://127.0.0.1:27017/cinema', 
    { useNewUrlParser: true,
    useUnifiedTopology: true })
    .catch(e => {
        console.error('Connection error', e.message)
    })

const db = mongoose.connection
module.exports = db;
```
5. Create `Movie` schema with `mongoose.Schena` at `/server/models/movie-model.js`
  Export Mongoose's model instance. 
  ```node
  const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Movie = new Schema(
    {
        name: {type: String, required: true},
        time: { type: [String], required: true},
        rating: { type: Number, require: true}
    },
    { timestamps: true}
);
module.exports = mongoose.model('Movie', Movie);
```
  When you first save the document created with `new Model(doc)`, a collection named `movies` will be created in the `cinema` database with the saved document. (Mongoose automatically look for the plural, lowercased version of the provided model name)

6. Create our REST endpoint with express's `Router` at `/server/routes/movie-router.js`
  ```node
  const express = require('express');
const MovieCtrl = require('../controllers/movie-ctrl');
const router = express.Router();

router.post('/movie', MovieCtrl.createMovie);
router.put('/movie/:id', MovieCtrl.updateMovie);
router.delete('/movie/:id', MovieCtrl.deleteMovie);
router.get('/movie/:id', MovieCtrl.getMovieById);
router.get('/movies', MovieCtrl.getMovies);

module.exports = router;
```
  Now implement the callback method for each route at `server/controllers/movie-ctrl.js`
  
7. Test server manually with `Postman` Application.  
  Make request to all the routes we set and check the responses.
  
## Client Side

1. Run `create-react-app` with `npx`.  
```
$npx create-react-app client
$cd client
$npm start
```
   Prepend PORT=8000 (or any other port than 3000) to start script.
   ```
},
  "scripts": {
    "start": "PORT=8000 react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
...
```
  Remove unneccesary files and install dependencies.
  ```
  $ npm install styled-components react-table react-router-dom axios bootstrap react-bootstrap --save
  ```
2. Create folders inside `src` to structure our component tree.
  ```
  $cd src
  $mkdir api assets components containers hoc
  ```
3. Start with implementing UIs with boilerplates:
  - Toolbar with logo and navigation items. Apply responsive styling.
  - Toggler for sidedrawer. Show only on mobile view.
  - Sidedrawer op top of backdrop. Set media queries for navigation items
  - Implement layout hoc component and compose toolbar, sidedrawer and main contents.
4. Inside the root `index.js`, Wrap`App` component with `BrowerRouter` from `react-router-dom`. In `App.js`, nest `Route` components (react-router-dom) inside `Layout`compoent.  
  Create each page (rendering component inside Routes) with minimal boilerplates inside `container` folder.
  
5. Finish each page. Start from the main page and move into more specific, functional page.
  Use appropriate libraries/packages and implement state management, api calls, event handling, and validation. 
