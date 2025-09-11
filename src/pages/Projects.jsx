// src/pages/Projects.jsx
import { useEffect, useState } from 'react';
import { GITHUB_USERNAME } from '../config';
import RepoCard from '../components/repoCard';
import { useI18n } from '../i18n';
import styles from './Projects.module.css'; // Yeni CSS modülümüzü import ediyoruz

export default function Projects() {
  const { t } = useI18n();
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function load() {
      try {
        setLoading(true);
        setError(null);

        const res = await fetch(
          `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=60`,
          { headers: { Accept: 'application/vnd.github+json' } }
        );
        if (!res.ok) throw new Error(`GitHub ${res.status}`);

        let data = await res.json();
        data = data
          .filter(r => !r.fork && !r.archived)
          .sort(
            (a, b) =>
              b.stargazers_count - a.stargazers_count ||
              new Date(b.pushed_at) - new Date(a.pushed_at)
          );

        setRepos(data);
      } catch (e) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  return (
    <section>
      <div className={styles.projectsSectionHeader}>
        <h1 className={styles.projectsTitle}>{t('projects.title')}</h1>
      </div>
      
      {loading && <p style={{ textAlign: 'center' }}>Yükleniyor...</p>}
      {error && <p style={{ color: '#f88', textAlign: 'center' }}>GitHub verisi alınamadı: {error}</p>}
      {!loading && !error && repos.length > 0 && (
        <div className={styles.projectsGrid}>
          {repos.map(repo => (
            <RepoCard key={repo.id} repo={repo} />
          ))}
        </div>
      )}
      {!loading && !error && repos.length === 0 && (
        <p style={{ textAlign: 'center' }}>Gösterilecek repo bulunamadı.</p>
      )}
    </section>
  );
}