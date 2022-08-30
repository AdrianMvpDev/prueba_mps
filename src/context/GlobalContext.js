import { createContext, useReducer } from 'react';
import appReducer from './AppReducer';
import { v4 } from 'uuid';

const initialState = {
  clients: [
    {
      id: '1',
      razonSocial: 'Panaderia Pan rico',
      contactPerson: 3114937899,
      address: 'Carrera 35 #51',
      phone: '3254578',
      department: 'Cundinamarca',
      city: 'Bogota',
      quotaGranted: 'panadero',
      active: false,
    },
    {
      id: '2',
      razonSocial: 'Panaderia Pan delicioso',
      contactPerson: 3114937459,
      address: 'Carrera 32 #25',
      phone: '32578978',
      department: 'Cundinamarca',
      city: 'Bogota',
      quotaGranted: 'panadero',
      active: false,
    },
  ],
};

export const GlobalContext = createContext(initialState);

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  const addClient = (client) => {
    dispatch({
      type: 'ADD_CLIENT',
      payload: { ...client, id: v4() },
    });
  };

  const deleteClient = (id) => {
    dispatch({ type: 'DELETE_CLIENT', payload: id });
  };

  const updateClient = (client) => dispatch({ type: 'UPDATE_CLIENT', payload: client });
  
  const toggleClientActive = id => dispatch({ type: 'TOGGLE_CLIENT_ACTIVE', payload: id });

  return <GlobalContext.Provider value={{ ...state, addClient, deleteClient, updateClient,toggleClientActive }}>{children}</GlobalContext.Provider>;
};
