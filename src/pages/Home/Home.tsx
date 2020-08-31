import React from 'react';
import { connect } from 'react-redux';

//App components
import { HomeWeatherCard } from '../../components/HomeWeatherCard/HomeWeatherCard';

//Bootstrap components
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

//Styles
import s from './Home.module.scss';

const Home = ({ homeWeather }: any) => {
  const [Kharkiv, Hikkaduwa, Japan] = homeWeather;

  return (
    <Container fluid>
      <Row>
        <h1 className={s['app-title']}>Weather App</h1>
      </Row>
      <Row>
        <input
          type="text"
          placeholder={'Search here...'}
          className={s['search-field']}
        />
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
});

export default connect(mapStateToProps)(Home);
