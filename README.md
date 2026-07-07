# UI Lab

Живая библиотека UI-компонентов. Каждый компонент — своя демо-страница плюс
кнопка «Скопировать промт», которая отдаёт исходный промт целиком, чтобы вставить
компонент в другой проект.

Стек: **Next.js 15 (App Router) + React 19 + Tailwind CSS v4 + TypeScript**,
структура в стиле shadcn (`components/ui`, `lib/utils.ts`).

## Локальный запуск

```bash
npm install --legacy-peer-deps
npm run dev
# http://localhost:3000
```

`--legacy-peer-deps` нужен из-за peer-требований three / R3F.

Production-сборка: `npm run build && npm start`.

## Структура

```
app/
  page.tsx              каталог (берёт данные из lib/registry.ts)
  layout.tsx            подключает плавающую панель DemoToolbar
  <route>/page.tsx      демо каждого компонента
  api/prompt/[id]/      отдаёт сырой текст промта по id
components/
  ui/                   сами компоненты (shadcn-путь)
  copy-prompt-button.tsx кнопка «скопировать» (fetch + clipboard)
  demo-toolbar.tsx      панель поверх демо: «Каталог» + «Скопировать промт»
content/prompts/<id>.txt  исходный текст промта на компонент
lib/
  registry.ts           единый список компонентов (метаданные)
  prompts.ts            серверное чтение файлов промтов
  utils.ts              cn()
```

## Как добавить новый компонент

Три файла + одна запись в реестре — больше ничего трогать не нужно:

1. **Компонент** → `components/ui/<name>.tsx`
   (если использует `useState`/эффекты/браузерные API — добавь `"use client"`).
2. **Демо-страница** → `app/<route>/page.tsx`, которая его рендерит.
3. **Текст промта** → `content/prompts/<id>.txt` (просто вставь промт как есть).
4. **Запись в реестре** → добавь объект в массив `REGISTRY` в `lib/registry.ts`:

   ```ts
   {
     id: "<id>",            // = имя файла промта: content/prompts/<id>.txt
     route: "/<route>",     // = папка в app/
     num: "12",
     title: "Название",
     desc: "Короткое описание для карточки каталога",
     tags: ["tag1", "tag2"],
   }
   ```

Карточка в каталоге, роут демо, кнопки «Скопировать промт» на карточке и в панели
подхватятся автоматически. Новые npm-зависимости ставь через
`npm i <pkg> --legacy-peer-deps`.

## Деплой на Vercel

Проект — стандартное Next.js-приложение, Vercel определит его сам.

**Вариант A — через Git (рекомендуется, удобно пополнять):**

1. Инициализируй репозиторий в папке `ui-lab` и запушь на GitHub:
   ```bash
   git init && git add . && git commit -m "ui-lab"
   git remote add origin <твой-repo-url> && git push -u origin main
   ```
2. На vercel.com → **Add New Project** → импортируй репозиторий.
   Если репозиторий шире, чем `ui-lab`, укажи **Root Directory = ui-lab**.
3. Framework Preset — Next.js (по умолчанию). Deploy.

После этого каждый `git push` — автодеплой. Добавил компонент → запушил → он в вебе.

**Вариант B — через CLI:**

```bash
npm i -g vercel
cd ui-lab
vercel        # предпросмотр
vercel --prod # прод
```

> Промты читаются с диска в рантайме (`content/prompts/*.txt`) через серверный
> route `/api/prompt/[id]`, поэтому сайт должен деплоиться как обычное
> Next.js-приложение (не `output: export`). На Vercel это работает из коробки.
