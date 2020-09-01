import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { fetchHomeWeather } from './actions/actions';
import Home from './pages/Home/Home';
import './styles.css';
import SearchedCity from './pages/SearchedCity/SearchedCity';

const App = ({ fetchHomeWeather }: any) => {
  useEffect(() => {
    fetchHomeWeather();
  }, [fetchHomeWeather]);

  return (
    <>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/searched-city" component={SearchedCity} />
      </Switch>
    </>
  );
};

export default connect(null, { fetchHomeWeather })(App);
