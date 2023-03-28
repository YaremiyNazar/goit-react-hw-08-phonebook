import { useSelector, useDispatch } from 'react-redux';
import { selectorUser } from 'redux/authorisationSlice/authorisationSelectors';
import { logOut } from 'redux/authorisationSlice/authorisationOperations';
import css from './UserMenu.module.css';

const UserMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector(selectorUser);
  return (
    <>
      <div className={css.wrapper}>
        <p className={css.name}>
          <span className={css.hello}>Hello, </span>
          {name}
        </p>
        <button className={css.button} onClick={() => dispatch(logOut())}>
          Logout
        </button>
      </div>
    </>
  );
};

export default UserMenu;
