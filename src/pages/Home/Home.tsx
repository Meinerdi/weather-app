import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

//App components
import { HomeWeatherCard } from '../../components/HomeWeatherCard/HomeWeatherCard';
import Search from '../../components/Search/Search';

//Bootstrap components
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

//Styles
import s from './Home.module.scss';

const Home = ({ homeWeather, searchedCity }: any) => {
  if (searchedCity) return <Redirect to={'/searched-city'} />;
  const [Kharkiv, Hikkaduwa, Japan] = homeWeather;

  return (
    <Container fluid>
      <Row>
        <h1 className={s['app-title']}>Weather App</h1>
      </Row>
      <Row md={2}>
        <Search />
      </Row>
      <Row className={s['home-weather']}>
        <Col xs={12} md={4} sm={6}>
          <HomeWeatherCard weather={Kharkiv} />
        </Col>
        <Col xs={12} md={4} sm={6}>
          <HomeWeatherCard weather={Hikkaduwa} />
        </Col>
        <Col xs={12} md={4} sm={6}>
          <HomeWeatherCard weather={Japan} />
        </Col>
      </Row>
    </Container>
  );
};

const mapStateToProps = (state: any) => ({
  homeWeather: state.ajaxReducer.homeWeather,
  searchedCity: state.ajaxReducer.searchedCity,
});

export default connect(mapStateToProps)(Home);
