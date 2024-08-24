import Header from '../components/Header';
import Hero from '../components/Hero';
import styles from '../styles/hero.module.css';


export default function Home() {
  return (
    <>
    <div className={styles.body}>
      <Header />
      <main>
        <Hero />
      </main>
      </div>
    </>
  );
}
