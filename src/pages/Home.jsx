import { useI18n } from '../i18n';
import styles from './Home.module.css';
import { Link } from 'react-scroll';
import { SiPython, SiJavascript, SiReact } from 'react-icons/si';

export default function Home() {
  const { t } = useI18n();
  return (
    <div className={styles.pageContainer}>
            <h1 className={styles.title}>{t('home.title')}</h1>
            <p className={styles.subtitle}>{t('home.subtitle')}</p>
      <div className={styles.ctaButtons}>
        <Link 
          to="projects" 
          spy={true} 
          smooth={true} 
          offset={-70} 
          duration={500} 
          className={`${styles.button} ${styles.ctaSecondary}`}
        >
          {t('home.proje')}
        </Link>
        <Link 
          to="iletisim" 
          spy={true} 
          smooth={true} 
          offset={-70} 
          duration={500} 
          className={`${styles.button} ${styles.ctaSecondary}`}
        >
          {t('home.iletisim')}
        </Link>
      </div>
      <h1 className={styles.subtitle}>{t('home.lang')}</h1>
      <div className={styles.techStack}>
        <div className={styles.techIcons}>
          <SiPython />
          <SiJavascript />
        </div>
      </div>
      <h1 className={styles.subtitle}>{t('home.frontend')}</h1>
      <div className={styles.techStack}>
        <div className={styles.techIcons}>
          <SiReact />
        </div>
      </div>

    </div>
  );
}