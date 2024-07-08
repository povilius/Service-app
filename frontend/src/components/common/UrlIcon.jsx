import classNames from 'classnames';
import styles from './UrlIcon.module.scss';
import PropTypes from 'prop-types';

const UrlIcon = ({ className, style = {}, url }) => {
  return (
    <div
      className={classNames(styles.icon, className)}
      style={{
        maskImage: `url(${url})`,
        WebkitMaskImage: `url(${url})`,
        ...style,
      }}
    />
  );
};

export default UrlIcon;

UrlIcon.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  url: PropTypes.string.isRequired,
};
