import { useI18n } from '../i18n';
import avatar from '../media/aseprite.png';
import styles from './Bio.module.css';

export default function Bio() {
  const { t } = useI18n();
  return (
    <div className={styles.pageContainer}>
      <h1 className={styles.title}>{t('bio.title')}</h1>
      <p className={styles.description}>{t('bio.desc')}</p>
    </div>
  );
}