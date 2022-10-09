import { Navigate } from 'react-router-dom';

import DefaultLayout from '../../layouts/DefaultLayout';

const routes = [
  {
    path: process.env.REACT_APP_CONTEXT_PATH,
    element: <DefaultLayout />,
    children: [
      {
        path: '/dashboard',
        element: <div>home</div>
      }
    ]
  },
  { path: '/', element: <Navigate to="/dashboard" /> }
];

export default routes;
