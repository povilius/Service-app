import { useNavigate, generatePath } from 'react-router-dom';
import UrlIcon from '@/components/common/UrlIcon';
import { ROUTES } from '@/router/consts';
import styles from './CategoryCard.module.scss';
import PropTypes from 'prop-types';

const CategoryCard = ({ category }) => {
  const { name } = category;
  const navigate = useNavigate();

  const categoryPath = generatePath(ROUTES.SEARCH_CATEGORY, { category: name });

  return (
    <div className={styles.card} onClick={() => navigate(categoryPath)}>
      <UrlIcon url={category.url} style={{ width: 48, height: 48, backgroundColor: category.color }} />
      <p className={styles.name}>{name}</p>
    </div>
  );
};

CategoryCard.propTypes = {
  category: PropTypes.shape({
    name: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    color: PropTypes.string,
  }).isRequired,
};

export default CategoryCard;
