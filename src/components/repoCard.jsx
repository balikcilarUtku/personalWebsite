export default function repoCard({ repo }) {
  return (
    <a
      href={repo.html_url}
      target="_blank"
      rel="noreferrer"
      style={{
        display: 'block',
        padding: 16,
        borderRadius: 12,
        background: '#1e1f24',
        border: '1px solid #2a2b31',
        textDecoration: 'none',
        color: '#e8e8e8',
        transition: 'transform .12s ease, border-color .12s ease, background .12s ease'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = '#3c3f49'
        e.currentTarget.style.background = '#22242a'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = '#2a2b31'
        e.currentTarget.style.background = '#1e1f24'
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}>
        <img
          src="/github-mark-white.png"
          alt=""
          style={{ width: 40, height: 40 }}
        />
        <span style={{ fontSize: 18, fontWeight: 400,fontFamily:"Bebas-Neue,sans-serif", color:'#FFBD69' }}>{repo.name}</span>
      </div>

      {repo.description && (
        <div style={{ opacity: 0.85, marginBottom: 10 }}>{repo.description}</div>
      )}

      <div style={{ display: 'flex', gap: 12, fontSize: 13, opacity: 0.9 }}>
        {repo.language && <span>💡 {repo.language}</span>}
        <span>⬆️ {new Date(repo.pushed_at).toLocaleDateString()}</span>
      </div>
    </a>
  )
}
