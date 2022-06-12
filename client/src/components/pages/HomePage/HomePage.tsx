import AddClientModal from '../../AddClientModal/AddClientModal';
import Clients from '../../Clients/Clients';
import Projects from '../../Projects/Projects';
import React from 'react';

type Props = {}

const HomePage:React.FC<Props> = () => {
  return (
    <>
      <div className="d-flex gap-3 mb-4">
        <AddClientModal/>
      </div>

      <Projects/>

      <hr />

      <Clients/>
    </>
  );
};

export default HomePage;
