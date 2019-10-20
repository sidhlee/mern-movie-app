import React from 'react';
import './App.css';
import Layout from './hoc/Layout/Layout';
import { Route, Switch } from 'react-router-dom';
import { MoviesList, MoviesInsert, MoviesUpdate, Main } from './containers';

function App() {
  return (
    <div className="App">
      <Layout>
        <Switch>
          <Route path="/movies/list" component={MoviesList} />
          <Route path="/movies/create" component={MoviesInsert} />
          <Route path="/movies/update/:id" component={MoviesUpdate} />
          <Route path="/" exact component={Main} />
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
