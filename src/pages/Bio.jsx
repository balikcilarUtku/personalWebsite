import { useI18n } from '../i18n';
import { Link } from 'react-scroll';
import styles from './Bio.module.css';
import{ FaGithub, FaLinkedin } from 'react-icons/fa';


export default function Bio() {
  const { t } = useI18n();
  return (
    <div className={styles.pageContainer}>
      <h1 className={styles.title}>{t('bio.title')}</h1>
      <div className={styles.ctaButtons}>
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
              
              <div className={styles.socialLinks}>
        <a href="https://github.com/balikcilarUtku" target="_blank" rel="noreferrer" className={styles.socialIcon}>
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/utku-bal%C4%B1k%C3%A7%C4%B1lar-76600b268/" target="_blank" rel="noreferrer" className={styles.socialIcon}>
          <FaLinkedin />
        </a>
      </div>
    </div>
  );
}