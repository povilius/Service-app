import PropTypes from 'prop-types';
import styles from './SearchInput.module.scss';

const SearchInput = props => {
  const { label, ...rest } = props;
  return (
    <div>
      <label>{label}</label>
      <input className={styles.searchInput} {...rest} placeholder="Search" />
    </div>
  );
};

SearchInput.propTypes = {
  label: PropTypes.string,
};

export default SearchInput;
