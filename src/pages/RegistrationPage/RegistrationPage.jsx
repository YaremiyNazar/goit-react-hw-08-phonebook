import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { register } from 'redux/authorisationSlice/authorisationOperations';
import { selectorLoading } from 'redux/authorisationSlice/authorisationSelectors';
import css from '../RegistrationPage/RegisterPage.module.css';

const INITIAL_STATE = {
  name: '',
  email: '',
  password: '',
};

const RegistrationPage = () => {
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
    dispatch(register(state));
  };
  const { name, email, password } = state;

  return (
    <div>
      {!isLoading && (
        <form className={css.form} onSubmit={handleSubmit}>
          <label>Name</label>
          <input
            className={css.input}
            value={name}
            type="text"
            name="name"
            onChange={handleChange}
            required
          />
          <label>Email</label>
          <input
            className={css.input}
            value={email}
            type="email"
            name="email"
            placeholder="example@gmail.com"
            onChange={handleChange}
            required
          />
          <label>Password</label>
          <span className={css.text}>use 7 or more characters </span>
          <input
            className={css.input}
            value={password}
            type="password"
            name="password"
            onChange={handleChange}
            required
          />

          <button className={css.button}>Registration</button>
        </form>
      )}
    </div>
  );
};

export default RegistrationPage;
// __________________________
