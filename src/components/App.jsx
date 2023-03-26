import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import Navigation from './Navigation/Navigation';
import AuthLayout from './AuthLayout/AuthLayout';
import PrivatRoute from './PrivateRoute/PrivateRoute';
import PublicRoute from './PublicRoute/PublicRoute';
import ContactPage from '../pages/ContactPage/ContactPage';
import LoginPage from '../pages/LoginPage/LoginPage';
import RegisterPage from '../pages/RegistrationPage/RegistrationPage';

import css from '../components/App.module.css';

const App = () => {
  return (
    <>
      <AuthLayout>
        <div className={css.wrapper}>
          <BrowserRouter basename="/goit-react-hw-08-phonebook">
            <Navigation />
            <Routes>
              <Route element={<PublicRoute />}>
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
              </Route>
              <Route element={<PrivatRoute />}>
                <Route path="/contacts" element={<ContactPage />} />
              </Route>
            </Routes>
            <ToastContainer />
          </BrowserRouter>
        </div>
      </AuthLayout>
    </>
  );
};
export default App;
