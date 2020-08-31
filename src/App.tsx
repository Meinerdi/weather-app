import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { fetchHomeWeather } from './actions/actions';
import Home from './pages/Home/Home';
import './styles.css';

const App = ({ fetchHomeWeather }: any) => {
  useEffect(() => {
    fetchHomeWeather();
  }, [fetchHomeWeather]);

  return (
    <>
      <Switch>
        <Route path="/" component={Home} exact />
      </Switch>
    </>
  );
};

export default connect(null, { fetchHomeWeather })(App);
