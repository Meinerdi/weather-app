import React from 'react';
import { connect } from 'react-redux';

//Bootstrap components
import Card from 'react-bootstrap/Card';

const SearchedCity = ({ searchedCity }: any) => {
  return (
    <>
      <Card>
        <Card.Img variant="top" />
        <Card.Body>
          <Card.Title>{searchedCity?.name}</Card.Title>
          <Card.Text>
            <span>Temperature: {searchedCity?.main?.temp.toFixed()}&#176;</span>
            <span>
              Feels Like: {searchedCity?.main?.feels_like.toFixed()}&#176;
            </span>
            <span>Wind speed: {searchedCity?.wind?.speed}&#9971;</span>
            <span>
              Sunrise:{' '}
              {new Date(searchedCity?.sys?.sunrise * 1000).toLocaleTimeString()}
            </span>
            <span>
              Sunset:{' '}
              {new Date(searchedCity?.sys?.sunset * 1000).toLocaleTimeString()}
            </span>
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

const mapDispatchToProps = (state: any) => ({
  searchedCity: state.ajaxReducer.searchedCity,
});

export default connect(mapDispatchToProps)(SearchedCity);
