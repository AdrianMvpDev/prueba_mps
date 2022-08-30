import React, { useState, useContext, useEffect } from 'react';
import { GlobalContext } from '../context/GlobalContext';
import { useNavigate, useParams } from 'react-router-dom';

const TaskForm = () => {
  const { addClient, clients, updateClient } = useContext(GlobalContext);
  const history = useNavigate();
  const params = useParams();

  const [client, setClient] = useState({
    id: "",
    razonSocial: '',
    contactPerson: '',
    address: '',
    phone: '',
    department: '',
    city: '',
    quotaGranted: '',
  });

  const handleChange = (e) => setClient({ ...client, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (client.id){
      updateClient(client)
    }else{
      addClient(client)
    }
    history('/');
  };

  useEffect(() => {
    const clientFound = clients.find((client) => client.id === params.id);
    if (clientFound) {
      setClient(clientFound)
    }
  }, [params.id, clients]);

  return (
    <div className=" flex justify-center items-center">
      <form className=" bg-gray-900 p-10 w-2/4 mb-10" onSubmit={handleSubmit}>
        <h2 className="mb-7 text-3x1 text-white">{client.id ? "Editar cliente" : "Crear cliente"}</h2>
        <div className=" mb-5 ">
          <input
            type="text"
            name="razonSocial"
            placeholder="Escribir una razon social"
            onChange={handleChange}
            value={client.razonSocial}
            className=" py-3 px-1 focus:outline-none focus:text-gray-100 bg-gray-700 w-full "
          />
        </div>
        <div className=" mb-5 ">
          <input
            type="text"
            name="contactPerson"
            placeholder="Escribir número de contacto"
            onChange={handleChange}
            value={client.contactPerson}
            className=" py-3 px-1 focus:outline-none focus:text-gray-100 bg-gray-700 w-full "
          />
        </div>
        <div className=" mb-5 ">
          <input
            type="text"
            name="address"
            placeholder="Escribir una dirección"
            onChange={handleChange}
            value={client.address}
            className=" py-3 px-1 focus:outline-none focus:text-gray-100 bg-gray-700 w-full "
          />
        </div>
        <div className=" mb-5 ">
          <input
            type="text"
            name="phone"
            placeholder="Escribir un telefono"
            onChange={handleChange}
            value={client.phone}
            className=" py-3 px-1 focus:outline-none focus:text-gray-100 bg-gray-700 w-full "
          />
        </div>
        <div className=" mb-5 ">
          <input
            type="text"
            name="department"
            placeholder="Escribir un departamento"
            onChange={handleChange}
            value={client.department}
            className=" py-3 px-1 focus:outline-none focus:text-gray-100 bg-gray-700 w-full "
          />
        </div>
        <div className=" mb-5 ">
          <input
            type="text"
            name="city"
            placeholder="Escribir un ciudad"
            onChange={handleChange}
            value={client.city}
            className=" py-3 px-1 focus:outline-none focus:text-gray-100 bg-gray-700 w-full "
          />
        </div>
        <div className=" mb-5 ">
          <input
            type="text"
            name="quotaGranted"
            placeholder="Escribir un cupo otorgado"
            onChange={handleChange}
            value={client.quotaGranted}
            className=" py-3 px-1 focus:outline-none focus:text-gray-100 bg-gray-700 w-full "
          />
        </div>
        <button className=" bg-green-600 w-full hover:bg-green-500 py-2 px-4 mt-5">{client.id ? "Editar" : "Crear"}</button>
      </form>
    </div>
  );
};

export default TaskForm;
