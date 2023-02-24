import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

function Coctail() {
  const { id } = useParams();

  const [coctail, setCoctail] = useState([]);

  useEffect(() => {
    fetchCocktail();
  }, []);

  const fetchCocktail = async function () {
    const res = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`);
    const data = await res.json();

    setCoctail(data.drinks);
  };

  return (
    <section className='cocktails-single'>
      {coctail.map((value) => {
        return (
          <>
            <h2 className='container__header'>
              {value.strDrink} {value.strCategory}
            </h2>
            <div key={value.idDrink} className='cocktails__item-single'>
              <img src={value.strDrinkThumb} alt='cocktail' className='cocktails__item-img' />
              <div className='drink-info'>
                <p>
                  <span className='drink-data'>info : </span> {value.strAlcoholic}
                </p>
                <p>
                  <span className='drink-data'>glass : </span> {value.strGlass}
                </p>
                <p>
                  <span className='drink-data'>instructons : </span> {value.strInstructions}
                </p>
                <p>
                  <span className='drink-data'>ingredients : </span> {value.strMeasure1} of {value.strIngredient1}
                </p>
                <p>
                  <span className='drink-data'>ingredients : </span> {value.strMeasure1} of {value.strIngredient2}
                </p>
                <p>
                  <span className='drink-data'>ingredients : </span> {value.strMeasure1} of {value.strIngredient3}
                </p>
                <p>
                  <span className='drink-data'>ingredients : </span> {value.strMeasure1} of {value.strIngredient4}
                </p>
                <Link to={'/'} className='button single'>
                  Go Back
                </Link>
              </div>
            </div>
          </>
        );
      })}
    </section>
  );
}

export default Coctail;
