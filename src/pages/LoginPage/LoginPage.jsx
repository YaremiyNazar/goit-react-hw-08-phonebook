import { useState} from 'react';
import {useSelector, useDispatch } from 'react-redux';
import { login } from 'redux/authorisationSlice/authorisationOperations';
import { selectorLoading } from 'redux/authorisationSlice/authorisationSelectors';

import css from "../LoginPage/LoginPage.module.css";

const INITIAL_STATE = {
  email: '',
  password: '',
};
const LoginPage = () => {
  const [state, setState] = useState({ ...INITIAL_STATE });
  const dispatch = useDispatch();
  const isLoading = useSelector(selectorLoading);
  const handleSubmit = event => {
    event.preventDefault();
    onSubmit(state);
    setState({ ...INITIAL_STATE });
  };
  const handleChange = e => {
    const { name, value } = e.target;
    setState(prevState => {
      return { ...prevState, [name]: value };
    });
  };
  const onSubmit = state => {
    dispatch(login(state));
  };
  const { email, password } = state;
  return (
      <div>
      {!isLoading && (
        <form className={css.form} onSubmit={handleSubmit}>
          <label>Email</label>
          <input
            className={css.input}
            value={email}
            type="email"
            name="email"
            onChange={handleChange}
            required
          />
          <label>Password</label>
          <input
            className={css.input}
            value={password}
            type="password"
            name="password"
            onChange={handleChange}
            required
          />
          <button className={css.button}>Login</button>
        </form>
      )}
    </div>
  );
};

export default LoginPage;
// ________________________________