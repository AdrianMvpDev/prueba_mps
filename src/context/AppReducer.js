import TaskForm from '../components/TaskForm';

export default function appReducer(state, { type, payload }) {
  switch (type) {
    case 'ADD_CLIENT':
      return { clients: [...state.clients, payload] };
    case 'DELETE_CLIENT':
      return {
        clients: state.clients.filter((client) => client.id !== payload),
      };
    case 'UPDATE_CLIENT':
      const updatedClient = payload;
      const updatedClients = state.clients.map((client) => {
        if (client.id === updatedClient.id) {
          client.razonSocial = updatedClient.razonSocial;
          client.contactPerson = updatedClient.contactPerson;
          client.address = updatedClient.address;
          client.phone = updatedClient.phone;
          client.department = updatedClient.department;
          client.city = updatedClient.city;
          client.quotaGranted = updatedClient.quotaGranted;
        }
        return client;
      });

      return {
        clients: updatedClients,
      };
    case 'TOGGLE_CLIENT_ACTIVE':
      return {
        clients: state.clients.map((client) => client.id === payload ? {...client, active : !client.active} : client),
      };
    default:
      return state;
  }
}
