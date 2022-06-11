import React from 'react';

type Props = {};

const Spinner: React.FC<Props> = () => {
  return (
    <div className='d-flex justify-content-center'>
      <span className='sr-only'>Loading...</span>

      <div className='spinner-border' role='status'></div>
    </div>
  );
};

export default Spinner;
