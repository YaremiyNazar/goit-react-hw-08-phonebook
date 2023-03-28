import { NavLink } from 'react-router-dom';
import css from '../Authorisation/Authorisation.module.css';
const Authorisation = () => {
  return (
    <div>
      <NavLink to="register" className={css.registrotion__link}>
        Register
      </NavLink>
     <span className={css.slash}>|</span>
      <NavLink to="login" className={css.registrotion__link}>
        Login
      </NavLink>
    </div>
  );
};
export default Authorisation;
