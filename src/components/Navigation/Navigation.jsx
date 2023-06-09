import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Authorisation from './Authorisation/Authorisation';
import UserMenu from './UserMenu/UserMenu';
import {
  selectorLogin,
  selectorToken,
} from 'redux/authorisationSlice/authorisationSelectors';

import css from '../Navigation/Navigation.module.css';

const Navigation = () => {
  const isLogin = useSelector(selectorLogin);
  const token = useSelector(selectorToken);

  return (
    <>
      <div className={css.header}>
        <div className={css.contacts}>
          {!isLogin && !token && <Authorisation />}
          {isLogin && <UserMenu />}
        </div>
            {isLogin && (
          <NavLink to="contacts" className={css.contact__link}>
            Phone Book
          </NavLink>
        )}
      </div>
    </>
  );
};

export default Navigation;
