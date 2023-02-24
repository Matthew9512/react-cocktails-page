import React, { useEffect, useMemo, useState } from 'react';
import CocktailsList from '../components/CocktailsList/CocktailsList';
import debounce from 'lodash.debounce';

function Home() {
  //
  let [cocktailsData, setCocktailsData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const res = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=`);
      const data = await res.json();
      console.log(`useEffect`);

      setCocktailsData(data.drinks);
    };
    getData();
  }, []);

  const changeHandler = async function (e) {
    const value = e.target.value;
    const res = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${value}`);
    const data = await res.json();

    setCocktailsData(data.drinks);
  };

  const debouncedChangeHandler = useMemo(() => debounce(changeHandler, 1000), []);

  return (
    <section className='container'>
      <h1 className='container__header'>
        Home to our coctail world <br />
        <span> search your favorite drink:</span>
      </h1>
      <div className='group'>
        <svg className='icon' aria-hidden='true' viewBox='0 0 24 24'>
          <g>
            <path d='M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z'></path>
          </g>
        </svg>
        <input onChange={debouncedChangeHandler} type='text' className='input' id='search' placeholder='e.g. bloody merry' />
      </div>
      <CocktailsList cocktails={cocktailsData} />
    </section>
  );
}

export default Home;
