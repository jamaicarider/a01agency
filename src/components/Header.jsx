import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { SITE } from '../data/content'

function useLocalTime() {
  const [time, setTime] = useState(() => formatTime(new Date()))

  useEffect(() => {
    const id = setInterval(() => setTime(formatTime(new Date())), 1000 * 15)
    return () => clearInterval(id)
  }, [])

  return time
}

function formatTime(date) {
  return date.toLocaleTimeString('pt-BR', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
    timeZone: 'America/Sao_Paulo',
  })
}

export default function Header({ theme = 'dark' }) {
  const time = useLocalTime()
  const isDark = theme === 'dark'

  return (
    <header
      className="site-header"
      data-theme={theme}
      style={{ color: isDark ? '#fff' : 'var(--ink)' }}
    >
      <div className="site-header__inner container">
        <Link to="/" className="site-header__brand">
          {SITE.tagline}
        </Link>

        <span className="site-header__meta">{SITE.location}</span>
        <span className="site-header__meta site-header__time">{time}</span>

        <nav className="site-header__social" aria-label="Redes sociais">
          <a href={SITE.social.instagram} target="_blank" rel="noreferrer">
            IG.
          </a>
          <a href={SITE.social.linkedin} target="_blank" rel="noreferrer">
            IN.
          </a>
          <a href={`https://wa.me/${SITE.whatsappNumber}`} target="_blank" rel="noreferrer">
            WA.
          </a>
        </nav>
      </div>

      <style>{`
        .site-header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 50;
          padding: 20px 0;
        }
        .site-header__inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
        }
        .site-header__brand {
          font-size: 12px;
          font-weight: 500;
          letter-spacing: 0.01em;
        }
        .site-header__meta {
          font-size: 12px;
          opacity: 0.85;
          display: none;
        }
        .site-header__time {
          font-variant-numeric: tabular-nums;
        }
        .site-header__social {
          display: flex;
          gap: 14px;
          font-size: 12px;
          margin-left: auto;
        }
        .site-header__social a {
          opacity: 0.85;
          transition: opacity 0.2s ease;
        }
        .site-header__social a:hover {
          opacity: 1;
        }
        @media (min-width: 720px) {
          .site-header__meta {
            display: block;
          }
          .site-header__social {
            margin-left: 0;
          }
        }
      `}</style>
    </header>
  )
}
