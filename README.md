# A01 Agency — site em React

Rebuild do site em React (Vite + React Router + Framer Motion), fiel à estrutura
do Framer original: Header com relógio ao vivo, Hero, About, Projetos,
Serviços e a página `/contact` com formulário.

## Rodando localmente

```bash
npm install
npm run dev
```

Abre em `http://localhost:5173`.

## Colocando os vídeos/GIFs de fundo

O site espera 3 arquivos de mídia em `public/media/`:

- `public/media/hero.mp4` — vídeo/GIF de fundo do topo da home
- `public/media/services.mp4` — vídeo da seção Serviços
- `public/media/contact.mp4` — vídeo/GIF de fundo da página de contato (as flores)

Quando você gerar os vídeos no nano banana, é só salvar com esses nomes
nessa pasta (ou trocar o caminho em `src/pages/Home.jsx` e
`src/pages/Contact.jsx`, na prop `src` de cada `<MediaBackground />`).

Se o arquivo for um GIF em vez de vídeo, funciona igual — o componente
`MediaBackground` detecta a extensão e usa `<img>` para `.gif` ou `<video>`
para `.mp4`/`.webm`. Até lá, aparece um fundo escuro neutro no lugar, então o
layout não quebra.

## WhatsApp

O número já está configurado em `src/data/content.js` (`SITE.whatsappNumber`).
Aparece no header, no botão flutuante e pode ser reaproveitado em qualquer
lugar do site.

## Enviar mensagens do formulário por e-mail

React puro não envia e-mail sozinho — o formulário em `src/pages/Contact.jsx`
já está com toda a lógica de validação e estado pronta, faltando só ligar num
serviço de envio. Duas opções:

### Opção 1 — EmailJS (mais rápido, sem backend)

1. Cria uma conta grátis em [emailjs.com](https://www.emailjs.com/)
2. Conecta o e-mail que vai receber as mensagens (ex: seu e-mail local)
3. Cria um template com os campos `from_name`, `from_email`, `phone`, `message`
4. Copia o Service ID, Template ID e Public Key
5. Cola os três valores no topo de `src/pages/Contact.jsx`:

```js
const EMAILJS_SERVICE_ID = 'seu_service_id'
const EMAILJS_TEMPLATE_ID = 'seu_template_id'
const EMAILJS_PUBLIC_KEY = 'sua_public_key'
```

Pronto — o formulário já chama `emailjs.send(...)` no submit.

### Opção 2 — Cloudflare Worker (mais controle, combina com seu stack)

Se preferir manter tudo no Cloudflare (como no álbum de fotos), dá pra trocar
o `handleSubmit` em `Contact.jsx` por um `fetch()` pra um Worker que recebe o
JSON do form e dispara o e-mail via Resend ou similar. Se quiser, monto esse
Worker também — é só pedir.

## Deploy

Build de produção:

```bash
npm run build
```

Gera a pasta `dist/`, pronta pra subir no Cloudflare Pages, Vercel ou
qualquer host estático.
