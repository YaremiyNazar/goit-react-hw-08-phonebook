import css from '../NotFoundPage/NotFoundPage.module.css';
const NotFoundPage = () => {
  return (
    <div className={css.box}>
      <p className={css.text}>
        Sorry, this page not found, but you may go back to the phone book :)
      </p>
    </div>
  );
};
export default NotFoundPage;
