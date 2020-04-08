import React from 'react';
import Card from '../../components/Card';
import SearchIcon from '@material-ui/icons/Search'
import './styles.css';

const bgImage = {
  background: `linear-gradient(rgba(0, 0, 0,.6), rgba(0, 0, 0,1)), no-repeat`,
  backgroundSize: 'cover',
}
const Main = () => (
  <div className='main'>
    <div className='bg-color'  style={bgImage}>
      <div className='max-width center-field'>
        <h2 className='welcome-text'>
          Stay informed! Get Realtime updates about Coronavirus outbreaks in
          your city.
        </h2>
        <form className='city-search'>
          <input className='city-search-input' placeholder='Try Ibadan' />
          <button type='submit'> <SearchIcon /> </button>
        </form>
      </div>
    </div>
    <div className='max-width'>
      <section className='results'>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </section>
    </div>
  </div>
);

export default Main;
