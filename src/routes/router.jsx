import { createBrowserRouter } from 'react-router-dom';
import Root from '../layouts/Root';
import ErrorPage from '../pages/ErrorPage';
import Home from '../pages/Home';
import SingUp from '../pages/SingUp';
import WelcomePage from '../pages/WelcomePage';
import SignUpQuestion from '../pages/SignUpQuestion';
import EmailVerifyPage from '../pages/EmailVerifyPage';
import PrivateRoute from './PrivateRoute';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: (
          <PrivateRoute>
            <Home />
          </PrivateRoute>
        ),
      },
      {
        path: '/verify-email',
        element: (
          <PrivateRoute>
            <EmailVerifyPage />
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: '/sign-up',
    element: <SingUp />,
  },
  {
    path: '/welcome',
    element: (
      <PrivateRoute>
        <WelcomePage />
      </PrivateRoute>
    ),
  },
  {
    path: '/question',
    element: (
      <PrivateRoute>
        <SignUpQuestion />
      </PrivateRoute>
    ),
  },
]);

export default router;
