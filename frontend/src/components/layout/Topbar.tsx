import { useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import { ROUTES } from "../../router/consts";
import Button from "../common/Button";
import styles from "./Topbar.module.scss";
import Logo from "../../assets/logo.svg";
import Avatar from "../common/Avatar";
import { UserContext } from "@/context/UserContext";

const Topbar = () => {
  const { user, logout } = useContext(UserContext);
  const navigate = useNavigate();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const links = [
    { href: ROUTES.HOME, label: "Home" },
    { href: ROUTES.SERVICES, label: "Services" },
    { href: ROUTES.ABOUT_US, label: "About Us" },
  ];

  const handleAvatarClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // const logout = () => {};

  return (
    <header className={styles.topbar}>
      <div className={styles.leftSide}>
        <Link to={ROUTES.HOME}>
          <img src={Logo} alt="logo" />
        </Link>
        <nav className={styles.navigation}>
          {links.map((link) => (
            <Link key={link.label} to={link.href} className={styles.link}>
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
      <div className={styles.rightSide}>
        {user ? (
          <>
            <Avatar onClick={handleAvatarClick}>{user.name[0]}</Avatar>
            {isDropdownOpen && (
              <div className={styles.dropdownMenu}>
                <Link to={ROUTES.PROFILE} className={styles.dropdownItem}>
                  Profile
                </Link>
                <Link to={ROUTES.MY_BOOKING} className={styles.dropdownItem}>
                  My booking
                </Link>
                <button onClick={logout} className={styles.dropdownItem}>
                  Logout
                </button>
              </div>
            )}
          </>
        ) : (
          <Button onClick={() => navigate(ROUTES.LOGIN)} large>
            Login / Sign Up
          </Button>
        )}
      </div>
    </header>
  );
};

export default Topbar;
