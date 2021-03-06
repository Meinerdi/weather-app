import React, { useState } from 'react';
import s from './Search.module.scss';
import { connect } from 'react-redux';
import { fetchSearhedCity } from '../../actions/actions';

const Search = ({ fetchSearhedCity, errorMessage }: any) => {
  const [searchInputValue, setSearchInputValue] = useState('');

  const handleSubmitSearch = (e: any) => {
    e.preventDefault();
    fetchSearhedCity(searchInputValue);
  };

  const handleSearchChanged = (e: any) => {
    setSearchInputValue(e.target.value);
  };

  return (
    <form onSubmit={handleSubmitSearch} className={s['search-form']}>
      <input
        type="search"
        placeholder={'Search here and type Enter...'}
        value={searchInputValue}
        onChange={handleSearchChanged}
      />
      <span className={s['error-message']}>{errorMessage && errorMessage}</span>
    </form>
  );
};

const mapStateToProps = (state: any) => ({
  errorMessage: state.ajaxReducer.errorMessage,
});
export default connect(mapStateToProps, { fetchSearhedCity })(Search);
