import React from 'react';
import { Link } from 'react-router-dom';

function Error() {
  return (
    <div>
      <h3 className='container__header'>There's no place like this</h3>
      <Link to={'/'} className='button single'>
        Go Back
      </Link>
    </div>
  );
}

export default Error;
