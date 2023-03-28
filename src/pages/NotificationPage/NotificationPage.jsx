import {
  selectorLogin,
  selectorToken,
} from 'redux/authorisationSlice/authorisationSelectors';
import { useSelector } from 'react-redux';

import css from '../NotificationPage/NotificationPage.module.css';

const NotificationPage = () => {
  const isLogin = useSelector(selectorLogin);
  const token = useSelector(selectorToken);
  return (
    <div className={css.box}>
      {!isLogin && !token && (
        <p className={css.text}>
          Welcome, to start using the phonebook, you must first register or
          login
        </p>
      )}
      {isLogin && token &&  <p className={css.text}>go back to phone book:)</p>}
    </div>
  );
};
export default NotificationPage;
