import * as React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Header from '../components/Header'
import WhatsAppButton from '../components/WhatsAppButton'
import MediaBackground from '../components/MediaBackground'
import HomeMobileTweaks from '../mobile/HomeMobile'
import { ABOUT, HERO, SERVICES } from '../data/content'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
}

export default function Home() {
  return (
    <>
      <Header theme="dark" />
      <WhatsAppButton />

      <main>
        <Hero />
        <About />
        <Services />
      </main>

      <footer className="site-footer">
        <div className="container">©{new Date().getFullYear()} A01 Agency</div>
      </footer>

      <HomeMobileTweaks />

      <style>{`
        .site-footer {
          padding: 32px 0 48px;
          font-size: 12px;
          color: var(--ink-soft);
        }
      `}</style>
    </>
  )
}

function Hero() {
  return (
    <section className="hero">
      {/* Drop the finished hero clip at /public/media/hero.mp4 (or .gif) — see README */}
      <MediaBackground src="/media/hero.mp4" alt="" />
      <div className="hero__scrim" aria-hidden="true" />

      <div className="hero__content container">
        <motion.h1
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        >
          {HERO.headline}
        </motion.h1>

        <motion.span
          className="hero__hint"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          {HERO.scrollHint}
        </motion.span>
      </div>

      <style>{`
        .hero {
          position: relative;
          min-height: 100vh;
          display: flex;
          align-items: flex-end;
          color: #fff;
        }
        .hero__scrim {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0) 35%, rgba(0,0,0,0.55) 100%);
        }
        .hero__content {
          position: relative;
          padding-bottom: clamp(48px, 8vw, 96px);
          padding-top: 140px;
        }
        .hero h1 {
          font-size: clamp(32px, 5.2vw, 68px);
          font-weight: 500;
          line-height: 1.08;
          letter-spacing: -0.01em;
          max-width: 16ch;
        }
        .hero__hint {
          display: inline-block;
          margin-top: 24px;
          font-size: 13px;
          color: var(--white-soft);
        }
      `}</style>
    </section>
  )
}

function About() {
  return (
    <section className="about">
      <div className="container about__grid">
        <span className="eyebrow">{ABOUT.eyebrow}</span>

        <div className="about__copy">
          {ABOUT.paragraphs.map((p, i) => (
            <motion.p
              key={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-80px' }}
              transition={{ delay: i * 0.08 }}
            >
              {p}
            </motion.p>
          ))}

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-80px' }}
            transition={{ delay: ABOUT.paragraphs.length * 0.08 }}
          >
            <Link to="/contact" className="pill-button">
              {ABOUT.cta}
              <ArrowIcon />
            </Link>
          </motion.div>
        </div>
      </div>

      <style>{`
        .about {
          padding: 120px 0 100px;
        }
        .about__grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 32px;
        }
        .about__copy {
          display: flex;
          flex-direction: column;
          gap: 28px;
          max-width: 620px;
        }
        .about__copy p {
          font-size: clamp(18px, 2.4vw, 26px);
          line-height: 1.4;
          letter-spacing: -0.005em;
        }
        @media (min-width: 900px) {
          .about__grid {
            grid-template-columns: 200px 1fr;
          }
        }
      `}</style>
    </section>
  )
}

const SERVICE_CARDS = [
  {
    title: 'Brand System',
    src: '/media/brand.jpeg',
    alt: 'Projeto de identidade visual',
  },
  {
    title: 'Landing pages',
    src: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80',
    alt: 'Equipe trabalhando em marketing digital',
  },
  {
    title: 'Product design',
    src: 'https://images.unsplash.com/photo-1516321165247-4aa89a48be28?auto=format&fit=crop&w=900&q=80',
    alt: 'Interface e prototipagem digital',
  },
  {
    title: 'Digital experiences',
    src: '/media/experience.png',
    alt: 'Experiência digital para marcas',
  },
  {
    title: 'Creative direction',
    src: '/media/creativedirection.jpeg',
    alt: 'Direção criativa para marcas',
  },
  {
    title: 'UX strategy',
    src: '/media/ux.jpeg',
    alt: 'Estratégia de UX e jornada do cliente',
  },
]

function ServiceCardStack() {
  const [cards, setCards] = React.useState(
    SERVICE_CARDS.map((card, index) => ({
      ...card,
      id: `${card.title}-${index}`,
    }))
  )

  const moveToEnd = React.useCallback(() => {
    setCards((prev) => {
      if (prev.length <= 1) return prev
      const [first, ...rest] = prev
      return [...rest, first]
    })
  }, [])

  const moveToFront = React.useCallback(() => {
    setCards((prev) => {
      if (prev.length <= 1) return prev
      const last = prev[prev.length - 1]
      return [last, ...prev.slice(0, -1)]
    })
  }, [])

  return (
    <div className="services__stack" aria-label="Cards de serviços">
      {cards.map(({ id, src, alt, title }, index) => {
        const isFront = index === 0
        const offsetIndex = Math.min(index, 5)

        return (
          <motion.div
            key={id}
            className="services__stack-card"
            drag={isFront ? 'x' : false}
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.18}
            dragMomentum={false}
            whileDrag={isFront ? { scale: 1.03, rotate: 2, cursor: 'grabbing' } : undefined}
            onDragEnd={(_, info) => {
              if (info.offset.x < -80 && isFront) {
                moveToEnd()
              }
              if (info.offset.x > 80 && isFront) {
                moveToFront()
              }
            }}
            animate={{
              x: `${offsetIndex * 26}px`,
              y: `${offsetIndex * -10}px`,
              rotate: offsetIndex * -1.2,
              scale: 1 - offsetIndex * 0.05,
              opacity: 0.18 + (1 - offsetIndex * 0.14),
              filter: `brightness(${1 - offsetIndex * 0.08}) saturate(${1 - offsetIndex * 0.05})`,
              zIndex: cards.length - index,
            }}
            transition={{ type: 'spring', stiffness: 220, damping: 22 }}
          >
            <img src={src} alt={alt || title} />
            <div className="services__stack-label">{title}</div>
          </motion.div>
        )
      })}
    </div>
  )
}

function Services() {
  return (
    <section className="services">
      <div className="container services__grid">
        <span className="eyebrow">{SERVICES.eyebrow}</span>

        <div className="services__media">
          <ServiceCardStack />
        </div>

        <div className="services__body">
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-80px' }}
          >
            {SERVICES.description}
          </motion.p>

          <ul className="services__list">
            {SERVICES.list.map((item, i) => (
              <motion.li
                key={item}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: '-60px' }}
                transition={{ delay: i * 0.05 }}
              >
                <span className="services__index">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span>{item}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>

      <style>{`
        .services {
          padding: 40px 0 140px;
        }
        .services__grid {
          display: grid;
          gap: 32px;
        }
        .services__media {
          position: relative;
          aspect-ratio: 10 / 16;
          border-radius: 22px;
          overflow: visible;
          min-height: 360px;
        }
        .services__stack {
          position: relative;
          width: 100%;
          height: 100%;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: center;
          perspective: 1200px;
        }
        .services__stack-card {
          position: absolute;
          width: 100%;
          height: min(86%, 560px);
          border-radius: 26px;
          overflow: hidden;
          background: #ece7df;
          box-shadow: 0 24px 54px rgba(15, 15, 15, 0.16);
          border: 1px solid rgba(23, 21, 15, 0.06);
          transform-origin: center center;
          touch-action: pan-y;
        }
        .services__stack-card img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          pointer-events: none;
        }
        .services__stack-label {
          position: absolute;
          left: 18px;
          bottom: 18px;
          display: inline-flex;
          align-items: center;
          padding: 8px 12px;
          border-radius: 999px;
          background: rgba(17, 17, 17, 0.72);
          backdrop-filter: blur(12px);
          color: #fff;
          font-size: 12px;
          letter-spacing: 0.04em;
          text-transform: uppercase;
        }
        .services__body p {
          font-size: clamp(18px, 2.2vw, 24px);
          line-height: 1.45;
          max-width: 640px;
          margin-bottom: 40px;
        }
        .services__list {
          list-style: none;
          border-top: 1px solid var(--line);
        }
        .services__list li {
          display: flex;
          align-items: center;
          gap: 20px;
          padding: 18px 0;
          border-bottom: 1px solid var(--line);
          font-size: 16px;
        }
        .services__index {
          font-size: 13px;
          color: var(--ink-soft);
          min-width: 28px;
        }
        @media (min-width: 900px) {
          .services__grid {
            grid-template-columns: 100px 1fr;
            grid-template-areas:
              'label media'
              '.     body';
          }
          .services__grid > .eyebrow { grid-area: label; }
          .services__media { grid-area: media; aspect-ratio: 16 / 10; }
          .services__body { grid-area: body; margin-top: 40px; }
        }
      `}</style>
    </section>
  )
}

function ArrowIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M7 17L17 7M17 7H8M17 7V16"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
