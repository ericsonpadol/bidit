import { useRoutes } from 'react-router-dom';

import routes from './components/routing';
import './App.css';

function App() {
  return <div>{useRoutes(routes)}</div>;
}

export default App;
