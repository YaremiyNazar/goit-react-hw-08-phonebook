import css from '../NotificationPage/NotificationPage.module.css';

const NotificationPage = () => {
  return (
    <div className={css.box}>
      <p className={css.text}>
        Welcome, to start using the phonebook, you must first register or login
      </p>
    </div>
  );
};
export default NotificationPage;
