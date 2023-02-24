import React from 'react';
import './CocktailsList.css';
import { Link } from 'react-router-dom';

function CocktailsList(props) {
  //
  if (!props.cocktails) return <h2 className='container__header'>No shit found</h2>;

  return (
    <section className='cocktails'>
      {props.cocktails.map((value) => {
        return (
          <div key={value.idDrink} className='cocktails__item'>
            <img src={value.strDrinkThumb} alt='cocktail' className='cocktails__item-img' />
            <div className='cocktails__item-details'>
              <div>
                <p className='cocktails__item-details-title'>{value.strDrink}</p>
                <p className='cocktails__item-details-cat'>{value.strCategory}</p>
              </div>
              <Link to={`/cocktail/${value.idDrink}`} className='button'>
                See more
              </Link>
            </div>
          </div>
        );
      })}
    </section>
  );
}

export default CocktailsList;
