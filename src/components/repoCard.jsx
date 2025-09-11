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
      {/* Kartın içeriğini saran bir div ekliyoruz. 
          Bu, parlayan kenarlık efektini yapmamızı sağlayacak. */}
      <div className={styles.cardContent}>
        {/* 1. Grid Satırı: Başlık */}
        <div className={styles.header}>
          <img
            src="/github-mark-white.png"
            alt="GitHub"
            className={styles.icon}
          />
          <span className={styles.repoName}>{repo.name}</span>
        </div>
        
        {/* 2. Grid Satırı: Açıklama */}
        <p className={styles.description}>
          {repo.description || 'Bu proje için bir açıklama bulunmuyor.'}
        </p>

        {/* 3. Grid Satırı: Alt Bilgi (Yıldız sayısı eklendi) */}
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