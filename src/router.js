import { createBrowserRouter } from 'react-router-dom';
import Lobby from './pages/Lobby';
import Room from './pages/Room';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Lobby />,
  },
  {
    path: '/:roomCode',
    element: <Room />,
  },
]);
