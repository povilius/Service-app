import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { ROUTES } from './router/consts';

import './App.css';
import Home from './pages/Home';
import Services from './pages/Services';
import AboutUs from './pages/AboutUs';
import ErrorPage from './pages/ErrorPage';
import RootLayout from './components/layout/RootLayout';
import Login from './pages/Login';
import SearchCategory from './pages/SearchCategory';
import Register from './pages/Register';
import { UserProvider } from './context/UserContext';

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: ROUTES.HOME,
        element: <Home />,
      },
      {
        path: ROUTES.SERVICES,
        element: <Services />,
      },
      {
        path: ROUTES.ABOUTUS,
        element: <AboutUs />,
      },
      {
        path: ROUTES.LOGIN,
        element: <Login />,
      },
      {
        path: ROUTES.SEARCH_CATEGORY,
        element: <SearchCategory />,
      },
      {
        path: ROUTES.REGISTER,
        element: <Register />,
      },
    ],
  },
]);

const App = () => {
  return (
    <UserProvider>
      <RouterProvider router={router} />
    </UserProvider>
  );
};

export default App;
