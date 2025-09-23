// src/components/RepoCard.jsx
import styles from './RepoCard.module.css';

export default function RepoCard({ repo }) {
  return (
    <a
      href={repo.html_url}
      target="_blank"
      rel="noreferrer"
      className={styles.card}
    >
      <div className={styles.cardContent}>
        
        <div className={styles.header}>
          <img
            src="/github-mark-white.png"
            alt="GitHub"
            className={styles.icon}
          />
          <span className={styles.repoName}>{repo.name}</span>
        </div>
        
        <p className={styles.description}>
          {repo.description || 'Bu proje için bir açıklama bulunmuyor.'}
        </p>

        <div className={styles.footer}>
          {repo.stargazers_count > 0 && (
            <span>⭐ {repo.stargazers_count}</span>
          )}
          {repo.language && <span>💻 {repo.language}</span>}
          <span>🔄 {new Date(repo.pushed_at).toLocaleDateString()}</span>
        </div>
      </div>
    </a>
  );
}