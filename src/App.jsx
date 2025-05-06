import { createBrowserRouter , RouterProvider} from 'react-router-dom';

import { AppLayout } from './components/Layout/AppLayout';

import '/src/App.css';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Countries } from './pages/Countries';
import { Contact } from './pages/Contact';
import { ErrorPage } from './pages/ErrorPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'countries',
        element: <Countries />,
      },
      
      {
        path: 'contact',
        element: <Contact />,
      },
    ]
  },

]);

const App = () => {

  return <RouterProvider router={router}></RouterProvider>
}

export default App;