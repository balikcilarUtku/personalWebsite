import { useI18n } from '../i18n';
import styles from './Home.module.css';
import { Link } from 'react-scroll';
import{ FaGithub, FaLinkedin } from 'react-icons/fa';
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
          to="bio" 
          spy={true} 
          smooth={true} 
          offset={-70} 
          duration={500} 
          className={`${styles.button} ${styles.ctaSecondary}`}
        >
          {t('home.iletisim')}
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