import styles from "./Avatar.module.scss"; // Assuming you have some styles defined

interface AvatarProps {
  onClick?: () => void; // Optional onClick handler
  children: React.ReactNode;
}

const Avatar = ({ onClick, children }: AvatarProps) => {
  return (
    <div
      className={styles.avatar}
      onClick={onClick}
      style={{ cursor: onClick ? "pointer" : "default" }}
    >
      {children}
    </div>
  );
};

export default Avatar;
