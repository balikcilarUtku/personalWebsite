import { useI18n } from '../i18n';
import styles from './iletisim.module.css';

export default function Home() {
  const { t } = useI18n();
  return (
    <div className={styles.socialLinks}>
        <a href="https://github.com/balikcilarUtku" target="_blank" rel="noreferrer" className={styles.socialIcon}>
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/utku-bal%C4%B1k%C3%A7%C4%B1lar-76600b268/" target="_blank" rel="noreferrer" className={styles.socialIcon}>
          <FaLinkedin />
        </a>
      </div>
  );
}