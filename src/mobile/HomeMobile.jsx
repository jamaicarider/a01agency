export default function HomeMobileTweaks() {
  return (
    <style>{`
      @media (max-width: 720px) {
        html, body {
          overflow-x: hidden;
          max-width: 100vw;
        }
        .container {
          max-width: 100%;
          padding-left: 14px;
          padding-right: 14px;
        }
        .hero {
          min-height: 78vh;
        }
        .media-bg__el {
          object-position: 70% center;
          transform: scale(1.32);
        }
        .hero__content {
          padding-top: 120px;
          padding-bottom: 40px;
        }
        .hero h1 {
          max-width: 11ch;
          font-size: clamp(28px, 11vw, 46px);
        }
        .about {
          padding: 84px 0 68px;
        }
        .about__copy {
          gap: 20px;
        }
        .about__copy p {
          font-size: clamp(17px, 6vw, 24px);
        }
        .services {
          padding: 12px 0 80px;
        }
        .services__grid {
          gap: 22px;
        }
        .services__media {
          min-height: 300px;
          aspect-ratio: 9 / 12;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .services__stack {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .services__stack-card {
          width: 86%;
          height: min(72%, 360px);
          left: 5%;
          transform: translateX(-50%);
        }
        .services__stack-label {
          left: 10px;
          bottom: 10px;
          font-size: 10px;
          padding: 7px 10px;
        }
        .services__body p {
          margin-bottom: 28px;
        }
        .services__list li {
          gap: 12px;
          font-size: 14px;
          padding: 16px 0;
        }
      }
    `}</style>
  )
}
