import { useNavigate, Link } from 'react-router-dom';
import { ROUTES } from '@/router/consts';
import { useContext } from 'react';
import { UserContext } from '@/context/UserContext';
import Avatar from '@/components/common/Avatar';
import Button from '@/components/Button';
import styles from '@/components/Header.module.scss';
import Logo from '@/assets/logo.svg';

const Header = () => {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  const links = [
    {
      href: ROUTES.HOME,
      label: 'Home',
    },
    {
      href: ROUTES.SERVICES,
      label: 'Services',
    },
    {
      href: ROUTES.ABOUTUS,
      label: 'About Us',
    },
  ];
  return (
    <header className={styles.header}>
      <div className={styles.leftSide}>
        <Link to={ROUTES.HOME}>
          <img src={Logo} alt="logo" />
        </Link>
        <nav className={styles.navigation}>
          {links.map(link => (
            <Link key={link.label} to={link.href} className={styles.link}>
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
      <div className={styles.rightSide}>
        {user ? (
          <Avatar>{user.email[0]}</Avatar>
        ) : (
          <Button onClick={() => navigate(ROUTES.LOGIN)} large>
            Login / Sign Up
          </Button>
        )}
      </div>
    </header>
  );
};

export default Header;
