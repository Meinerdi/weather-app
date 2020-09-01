import React from 'react';

//Bootstrap components
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

//Images for cards weather
import clear from '../../assets/images/clear.gif';
import clouds from '../../assets/images/clouds.gif';
import drizzle from '../../assets/images/drizzle.gif';
import fog from '../../assets/images/fog.gif';
import rain from '../../assets/images/rain.gif';
import snow from '../../assets/images/snow.gif';
import thunderstorm from '../../assets/images/thunderstorm.gif';

// Styles
import s from './HomeWeatherCard.module.scss';

const weatherMatches: any = {
  clear,
  clouds,
  drizzle,
  fog,
  rain,
  snow,
  thunderstorm,
};

export const HomeWeatherCard = ({ weather = {} }: any) => {
  const { main, name, sys, weather: w = [], wind } = weather;

  return (
    <Card className={s['card']}>
      <Card.Img
        variant="top"
        src={weatherMatches[w[0]?.main?.toLowerCase()]}
        className={s['card-image']}
      />
      <Card.ImgOverlay className={s['card-info-holder']}>
        <Card.Title className={s['card-name']}>
          <span>{name}</span>
          <span>{sys?.country}</span>
        </Card.Title>
        <Card.Text className={s['card-info']}>
          <span>Temperature: {main?.temp.toFixed()}&#176;</span>
          <span>Feels Like: {main?.feels_like.toFixed()}&#176;</span>
          <span>Wind speed: {wind?.speed}&#9971;</span>
          <span>
            Sunrise: {new Date(sys?.sunrise * 1000).toLocaleTimeString()}
          </span>
          <span>
            Sunset: {new Date(sys?.sunset * 1000).toLocaleTimeString()}
          </span>
        </Card.Text>
        <Button variant="dark">Get details</Button>
      </Card.ImgOverlay>
    </Card>
  );
};
