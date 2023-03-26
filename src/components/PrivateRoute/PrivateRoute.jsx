import { useSelector } from 'react-redux';
import { selectorLogin, selectorToken } from 'redux/authorisationSlice/authorisationSelectors';
import { Outlet, Navigate } from 'react-router-dom';

const PrivatRoute = () => {
  const isLogin = useSelector(selectorLogin);
  const token = useSelector(selectorToken);
  if (!isLogin && !token) {
    return <Navigate to="/login" />;
  }
  if (!isLogin && token) {
    return <p>Loading...</p>;
  }

  return <Outlet />;
};
export default PrivatRoute;
