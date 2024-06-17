import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layout/Main';
import Signin from '../components/Pages/Signin';
import Register from '../components/Pages/Register';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    children: [
      {
        path: '/signin',
        element: <Signin />,
      },
      {
        path: '/register',
        element: <Register />,
      },
    ],
  },
]);
