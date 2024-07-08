import Button from '@/components/Button';
import styles from './BusinessCard.module.scss';
import PropTypes from 'prop-types';

const BusinessCard = ({ business }) => {
  return (
    <div className={styles.card}>
      {business.images.length > 0 && <img src={business.images[0].url} alt={business.name} className={styles.image} />}
      <div className={styles.infoContainer}>
        <span className={styles.chip}>{business.category}</span>
        <h3 className={styles.name}>{business.name}</h3>
        <p className={styles.contactPerson}>{business.contactPerson}</p>
        <p className={styles.address}>{business.address}</p>
        <Button>Book now</Button>
      </div>
    </div>
  );
};

BusinessCard.propTypes = {
  business: PropTypes.shape({
    images: PropTypes.arrayOf(
      PropTypes.shape({
        url: PropTypes.string.isRequired,
      }),
    ).isRequired,
    category: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    contactPerson: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
  }).isRequired,
};

export default BusinessCard;
