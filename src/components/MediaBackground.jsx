/**
 * Renders a full-bleed background media element.
 * Pass a `.mp4`/`.webm` for `src` to get a looping muted video,
 * or a `.gif`/image path to render it as an <img> instead.
 * Until the real asset is dropped in `/public/media`, this falls back
 * to a quiet dark gradient so the layout still reads correctly.
 */
export default function MediaBackground({ src, poster, alt = '' }) {
  const isVideo = src && /\.(mp4|webm|mov)$/i.test(src)
  const isImage = src && /\.(gif|jpg|jpeg|png|webp)$/i.test(src)

  return (
    <div className="media-bg">
      {isVideo && (
        <video
          className="media-bg__el"
          src={src}
          poster={poster}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        />
      )}
      {isImage && <img className="media-bg__el" src={src} alt={alt} />}
      {!isVideo && !isImage && <div className="media-bg__placeholder" aria-hidden="true" />}

      <style>{`
        .media-bg {
          position: absolute;
          inset: 0;
          overflow: hidden;
          background: #0c0c0c;
        }
        .media-bg__el {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          transform: scale(1.06);
          filter: saturate(0.8) contrast(1.1) brightness(0.72);
        }

        @media (max-width: 720px) {
          .media-bg__el {
            object-position: 38% center;
            transform: scale(1.22);
          }
        }
        .media-bg__placeholder {
          width: 100%;
          height: 100%;
          background: linear-gradient(160deg, #232323 0%, #0c0c0c 65%);
        }
      `}</style>
    </div>
  )
}
