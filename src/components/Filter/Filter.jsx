import { useSelector, useDispatch } from 'react-redux';
import { getFiltered } from "../../redux/contactSlice/contactSlice"
import { selectFilter} from '../../redux/contactSlice/contactsSelector'

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);
  
  const handleChange = event => {
    const value = event.target.value;
    dispatch(getFiltered(value));
  };
  return (
    <div>
      <p>Find contats by name</p>
      <input onChange={handleChange} type="text" value={filter} required />
    </div>
  );
};

export default Filter;
