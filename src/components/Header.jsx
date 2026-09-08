import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { CONTENT } from '../data/content'

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

export default function Header({ theme = 'dark', language = 'pt', setLanguage }) {
  const time = useLocalTime()
  const isDark = theme === 'dark'
  const copy = CONTENT[language]

  return (
    <header
      className="site-header"
      data-theme={theme}
      style={{ color: isDark ? '#fff' : 'var(--ink)' }}
    >
      <div className="site-header__inner container">
        <Link to="/" className="site-header__brand" aria-label={copy.SITE.name}>
          <img src="/media/a01.png" alt={copy.SITE.name} className="site-header__logo" />
        </Link>

        <span className="site-header__meta">{copy.SITE.location}</span>
        <span className="site-header__meta site-header__time">{time}</span>

        <div className="site-header__actions">
          <nav className="site-header__social" aria-label={copy.HEADER.socialAria}>
            <a href={copy.SITE.social.instagram} target="_blank" rel="noreferrer">
              IG.
            </a>
            <a href={`https://wa.me/${copy.SITE.whatsappNumber}`} target="_blank" rel="noreferrer">
              WA.
            </a>
          </nav>

          <button
            type="button"
            className="site-header__language"
            onClick={() => setLanguage?.(language === 'pt' ? 'en' : 'pt')}
            aria-label={copy.HEADER.languageToggleAria}
          >
            {language === 'en' ? 'PT' : 'EN'}
          </button>
        </div>
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
          gap: 16px;
        }
        .site-header__brand {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          line-height: 1;
          flex-shrink: 0;
        }
        .site-header__logo {
          display: block;
          width: 52px;
          height: auto;
        }
        .site-header__meta {
          font-size: 12px;
          opacity: 0.85;
          display: none;
        }
        .site-header__time {
          font-variant-numeric: tabular-nums;
        }
        .site-header__actions {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-left: auto;
        }
        .site-header__social {
          display: flex;
          gap: 12px;
          font-size: 12px;
        }
        .site-header__social a {
          opacity: 0.85;
          transition: opacity 0.2s ease;
        }
        .site-header__social a:hover {
          opacity: 1;
        }
        .site-header__language {
          appearance: none;
          border: 1px solid rgba(255, 255, 255, 0.35);
          background: rgba(255, 255, 255, 0.04);
          color: inherit;
          border-radius: 999px;
          padding: 8px 12px;
          font-size: 11px;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          cursor: pointer;
          transition: border-color 0.2s ease, background 0.2s ease;
          flex-shrink: 0;
        }
        .site-header__language:hover {
          border-color: rgba(255, 255, 255, 0.7);
          background: rgba(255, 255, 255, 0.08);
        }
        @media (max-width: 719px) {
          .site-header {
            padding: 16px 0;
          }
          .site-header__inner {
            gap: 10px;
            flex-wrap: wrap;
          }
          .site-header__brand {
            order: 1;
          }
          .site-header__actions {
            order: 2;
            margin-left: 0;
            margin-right: 0;
            width: auto;
          }
          .site-header__social {
            gap: 10px;
          }
        }
        @media (min-width: 720px) {
          .site-header__meta {
            display: block;
          }
          .site-header__actions {
            margin-left: 0;
          }
        }
      `}</style>
    </header>
  )
}
