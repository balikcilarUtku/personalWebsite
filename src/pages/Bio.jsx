import { useI18n } from '../i18n';
import { Link } from 'react-scroll';
import styles from './Bio.module.css';

export default function Bio() {
  const { t } = useI18n();
  return (
    <div className={styles.pageContainer}>
      <h1 className={styles.title}>{t('bio.title')}</h1>
              <Link 
                to="iletisim"
                spy={true} 
                smooth={true} 
                offset={-70} 
                duration={500} 
                className={`${styles.button} ${styles.ctaSecondary}`}
              >
                {t('bio.iletisim')}
              </Link>
              <Link 
                to="cv"
                spy={true} 
                smooth={true} 
                offset={-70} 
                duration={500} 
                className={`${styles.button} ${styles.ctaSecondary}`}
              >
                {t('bio.cv')}
              </Link>
    </div>
  );
}