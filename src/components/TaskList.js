import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';
import { Link } from 'react-router-dom';

const TaskList = () => {
  const { clients, deleteClient, toggleClientActive } = useContext(GlobalContext);

  return (
    <div className="flex justify-center">
      <div className="w-6/12">
        {clients.map((client) => (
          <div className=" bg-gray-900 px-20 py-5 text-white shadow-2x1 mb-4 flex justify-between" key={client.id}>
            <div>
              <h1>{client.razonSocial} </h1>
              <p>{client.contactPerson} </p>
              <p>{client.address} </p>
              <p>{client.phone} </p>
              <p>{client.department} </p>
              <p>{client.city} </p>
              <p>{client.quotaGranted}</p>
              <button className="bg-purple-600 hover:bg-purple-500 py-1 px-3 mt-2" onClick={() => toggleClientActive(client.id)}>
                {client.active ? 'Inactivo' : 'Activo'}
              </button>
            </div>
            <div className=" flex items-center">
              <Link to={`/edit/${client.id}`} className="bg-gray-600 hover:bg-gray-500 py-2 px-4 mr-2">
                Editar
              </Link>
              <button className="bg-red-600 hover:bg-red-500 py-2 px-4 mr-2" onClick={() => deleteClient(client.id)}>
                Eliminar
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaskList;
