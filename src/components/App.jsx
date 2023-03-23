import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import  {fetchContacts}  from 'redux/contactSlice/contactsOperations';

import ContactList from '../components/ContactList/ContactList';
import ContactForm from '../components/ContactForm/ContactForm';
import Filter from '../components/Filter/Filter';

import css from '../components/App.module.css';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  
  return (
    <div className={css.wrapper}>
      <div className={css.contact__form}>
        <h1>PhoneBook</h1>
        <ContactForm />
      </div>
      <div className={css.contact}>
        <h2>Contacts</h2>
        <Filter />
        { <ContactList />}
      </div>
    </div>
  );
};
export default App;