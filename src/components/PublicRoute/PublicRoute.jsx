import { useSelector } from 'react-redux';
import { Outlet, Navigate } from 'react-router-dom';
import { selectorLogin } from 'redux/authorisationSlice/authorisationSelectors';

const PublicRoute = () => {
  const isLogin = useSelector(selectorLogin);
  if (isLogin) {
    return <Navigate  to="/contacts" />;
  }
  return <Outlet />;
};
export default PublicRoute;
