import Hero from '../components/Hero';
import BusinessList from '@/components/home/BusinessList';
import styles from './Home.module.scss';
import CategoryList from '@/components/home/CategoryList';

function Home() {
  return (
    <div>
      <Hero />
      <CategoryList />
      <h2 className={styles.title}>Popular businesses</h2>
      <BusinessList />
    </div>
  );
}

export default Home;
