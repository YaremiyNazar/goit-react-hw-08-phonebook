import ContactItem from '../ContactItem/ContactItem';
import css from '../ContactList/ContactList.module.css';
import { useSelector } from 'react-redux';
import { selectContacts,selectFilter } from '../../redux/contactSlice/contactsSelector';

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

    const filterContacts = contacts.filter(item =>
      item.name.toLowerCase().includes(filter.toLowerCase())
    );
  return (
    <ul className={css.contact__list}>
      {filterContacts.map(({ id, name, phone}) => (
        <ContactItem name={name} number={phone} id={id} key={id} />
      ))}
    </ul>
  );
};
export default ContactList;
