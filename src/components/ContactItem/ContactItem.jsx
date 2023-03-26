import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactSlice/contactsOperations';
import css from '../ContactItem/ContactItem.module.css';

const ContactItem = ({ name, number, id}) => {
  const dispatch = useDispatch();

  const delContacts = id => {
    dispatch(deleteContact(id));
  };
  return (
    <div className={css.wrapper}>
      <li className={css.contact__item}>
        <p className={css.text__name}>{name}</p>
        <p className={css.text__number}>{number}</p>
        <button
          className={css.button}
          type="button"
          onClick={() => delContacts(id)}
        >
          Delete
        </button>
      </li>
    </div>
  );
};

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default ContactItem;
