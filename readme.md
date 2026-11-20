# Portfólio — Ilton Batista

Site pessoal publicado em **https://iltonbjsilva.github.io/**, em PT, EN e ES, com tema claro e escuro.

Stack: React 18, TypeScript, Vite e Tailwind CSS, publicado no GitHub Pages.

## Rodar localmente

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # typecheck + build de produção em dist/
npm run lint
```

## Como adicionar um projeto

### Opção 1: sem código (pelo GitHub)

1. Abra o repositório no GitHub e clique na engrenagem ⚙️ ao lado de **About**.
2. Em **Topics**, adicione `portfolio`.
3. Preencha a **Description** (vira o texto do card) e, se houver, o **Website** (vira o botão "Ver online").
4. Para definir a área no filtro, adicione um destes tópicos:

   | Tópico | Área no site |
   |---|---|
   | `architecture`, `distributed-systems`, `microservices` | Arquitetura |
   | `ai`, `llm`, `agents`, `ai-agents` | IA & LLMs |
   | `machine-learning`, `ml`, `data`, `data-science` | Dados & ML |
   | `security` | Segurança |
   | `devops`, `docker`, `ci-cd` | DevOps |
   | `automation`, `bot` | Automação |

   Os outros tópicos (ex.: `fastapi`, `postgresql`) aparecem como tecnologias.

O projeto aparece no site sem novo deploy (os dados ficam em cache por até 1 hora em cada visitante). Para tirá-lo do site, remova o tópico `portfolio`.

### Opção 2: card completo (pelo código)

Para um card com destaques, métricas e textos nos 3 idiomas, edite `src/data/projects.ts`. Dá para fazer direto pelo editor web do GitHub (tecla `.` no repositório). O deploy roda sozinho a cada push na `master`.

## Estrutura

```
src/
  data/projects.ts        projetos em destaque (conteúdo nos 3 idiomas)
  data/competitions.ts    hackathons (NASA Space Apps etc.) e a minha contribuição em cada um
  data/profile.ts         links, e-mail e currículos
  data/translations/      textos do site (pt, en, es)
  hooks/useProjects.ts    projetos fixos + repositórios com o tópico "portfolio"
  components/sections/    Hero, Atuação, Projetos, Experiência, Habilidades, Sobre, Contato
public/                   favicon, imagem de compartilhamento (og-image.jpg) e certificates/ (PDFs)
.github/workflows/        CI (lint + typecheck + build) e deploy no GitHub Pages
```
