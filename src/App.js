import { RouterProvider } from 'react-router-dom';
import './App.scss';
import Lobby from './components/Lobby';
import { router } from './router';

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
