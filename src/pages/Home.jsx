import { useI18n } from '../i18n';
import styles from './Home.module.css';

export default function Home() {
  const { t } = useI18n();
  return (
    <div className={styles.pageContainer}>
      <h1 className={styles.title}>{t('home.title')}</h1>
      <p className={styles.description}>
        {t('home.desc')}
      </p>
    </div>
  );
}