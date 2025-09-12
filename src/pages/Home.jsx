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
        <a href="https://www.linkedin.com/in/utku-balıkçılar-5a8289297/" target="_blank" rel="noreferrer" className={styles.socialIcon}>
          <FaLinkedin />
        </a>
      </div>
      <div className={styles.techStack}>
        <p>Teknoloji Bilgim</p>
        <div className={styles.techIcons}>
          <SiJavascript />
          <SiReact />
          <SiPython />
        </div>
      </div>

    </div>
  );
}