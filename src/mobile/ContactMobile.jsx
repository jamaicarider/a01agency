export default function ContactMobileTweaks() {
  return (
    <style>{`
      @media (max-width: 720px) {
        .contact {
          padding: 120px 0 60px;
        }
        .contact__wrap {
          max-width: 100%;
        }
        .contact__form {
          padding: 20px 18px;
          gap: 18px;
          border-radius: 14px;
        }
        .contact__submit {
          width: 100%;
        }
        .field input,
        .field textarea {
          font-size: 16px;
        }
      }
    `}</style>
  )
}
