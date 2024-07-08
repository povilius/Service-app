import classNames from 'classnames';
import { businesses } from '@/consts/businesses';
import BusinessCard from './BusinessCard';
import styles from './BusinessList.module.scss';
import PropTypes from 'prop-types';

const BusinessList = ({ category, className }) => {
  const filteredBusiness = category ? businesses.filter(businesses => businesses.category === category) : businesses;

  return (
    <div className={classNames(styles.container, className)}>
      {filteredBusiness.map(businesses => (
        <BusinessCard key={businesses._id} business={businesses} />
      ))}
    </div>
  );
};

export default BusinessList;

BusinessList.propTypes = {
  category: PropTypes.string,
  className: PropTypes.string,
};
