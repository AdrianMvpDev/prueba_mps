import { Route, Routes } from 'react-router-dom';
import Heading from './components/Heading';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import { ContextProvider } from './context/GlobalContext';

function App() {
  return (
    <div>
      <div className=" h-screen text-center p-10 ">
        <div className=" container mx-auto px-10 text-white h-full ">
          <ContextProvider>
            <Heading />
            <Routes>
              <Route path="/" element={<TaskList />} exact />
              <Route path="/add" element={<TaskForm />} />
              <Route path="/edit/:id" element={<TaskForm />} />
            </Routes>
          </ContextProvider>
        </div>
      </div>
    </div>
  );
}

export default App;
