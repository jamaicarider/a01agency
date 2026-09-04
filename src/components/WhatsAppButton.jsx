import { SITE } from '../data/content'

export default function WhatsAppButton() {
  return (
    <a
      href={`https://wa.me/${SITE.whatsappNumber}`}
      target="_blank"
      rel="noreferrer"
      className="whatsapp-fab"
      aria-label="Falar no WhatsApp"
    >
      <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" aria-hidden="true">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
        <path d="M12.04 2c-5.523 0-10 4.477-10 10 0 1.77.464 3.492 1.345 5.008L2 22l5.14-1.35A9.955 9.955 0 0 0 12.04 22c5.522 0 10-4.477 10-10S17.562 2 12.04 2zm0 18.166c-1.622 0-3.213-.437-4.6-1.264l-.33-.196-3.05.8.815-2.976-.215-.305a8.14 8.14 0 0 1-1.28-4.393c0-4.53 3.687-8.217 8.217-8.217 4.529 0 8.217 3.687 8.217 8.217 0 4.529-3.688 8.334-8.217 8.334z" />
      </svg>

      <style>{`
        .whatsapp-fab {
          position: fixed;
          bottom: 24px;
          right: 24px;
          z-index: 60;
          width: 52px;
          height: 52px;
          border-radius: 50%;
          background: var(--ink);
          color: var(--white);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.25);
          transition: transform 0.3s var(--ease);
        }
        .whatsapp-fab:hover {
          transform: scale(1.06);
        }
      `}</style>
    </a>
  )
}
