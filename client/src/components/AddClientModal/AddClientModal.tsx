import { ADD_CLIENT } from '../../mutations/clientMutations';
import { ClientsData } from '../../typings/typings';
import { FaUser } from 'react-icons/fa';
import { GET_CLIENTS } from '../../queries/clientQueries';
import { useMutation } from '@apollo/client';
import React, { useState } from 'react';

type Props = {};

const AddClientModal: React.FC<Props> = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const [addClient] = useMutation(ADD_CLIENT, {
    variables: { name, email, phone },
    update(cache, { data: { addClient } }) {
      const clients = cache.readQuery<ClientsData>({ query: GET_CLIENTS })!.clients;

      cache.writeQuery({
        query: GET_CLIENTS,
        data: {
          clients: [...clients, addClient],
        },
      });
    }
  }
  );

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!name || !email || !phone) {
      return alert('Please fill in all fields');
    }

    addClient();

    setName('');
    setEmail('');
    setPhone('');
  };

  return (
    <div>
      <button
        type='button'
        className='btn btn-secondary'
        data-bs-toggle='modal'
        data-bs-target='#addClientModal'
      >
        <div className='d-flex align-items-center'>
          <FaUser className='icon' />

          <div>Add Client</div>
        </div>
      </button>

      <div
        className='modal fade'
        id='addClientModal'
        aria-labelledby='addClientModalLabel'
        aria-hidden='true'
      >
        <div className='modal-dialog'>
          <div className='modal-content'>
            <div className='modal-header'>
              <h5
                className='modal-title'
                id='addClientModalLabel'
              >
                Add Client
              </h5>

              <button
                type='button'
                className='btn-close'
                data-bs-dismiss='modal'
                aria-label='Close'
              />
            </div>

            <div className='modal-body'>
              <form
                className='mb-3'
                onSubmit={handleSubmit}
              >
                <label
                  htmlFor='name'
                  className='form-label'
                >
                  Name
                </label>

                <input
                  type='text'
                  className='form-control'
                  id='name'
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />

                <label
                  htmlFor='email'
                  className='form-label'
                >
                  Email
                </label>

                <input
                  type='text'
                  className='form-control'
                  id='email'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />

                <label
                  htmlFor='phone'
                  className='form-label'
                >
                  Phone
                </label>

                <input
                  type='text'
                  className='form-control'
                  id='phone'
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />

                <button
                  className='btn btn-secondary mt-3'
                  type='submit'
                  data-bs-dismiss='modal'
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddClientModal;
