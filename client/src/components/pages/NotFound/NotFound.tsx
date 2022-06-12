import { FaExclamationTriangle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import React from 'react'; ;

type Props = {}

const NotFound:React.FC<Props> = () => {
  return (
    <div className='d-flex flex-column justify-content-center align-items-center mt-5'>
      <FaExclamationTriangle
        className='text-danger'
        size='5em'
      />

      <h1>404</h1>

      <p className='lead'>
        Sorry, this page does not exists
      </p>

      <Link to='/'>Go Back</Link>
    </div>
  );
};

export default NotFound;
