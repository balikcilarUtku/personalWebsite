import { useI18n } from '../i18n';
import styles from './cv.module.css';
import { Link } from 'react-scroll';

export default function Home() {
  const { t } = useI18n();
  return (
    <div className={styles.pageContainer}>
      <h1 className={styles.title}>{t('cv.title')}</h1>
    </div>
  );
}