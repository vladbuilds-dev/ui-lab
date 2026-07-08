// Единый реестр компонентов библиотеки.
// Чтобы добавить новый компонент: положи файлы в components/ui, создай
// app/<route>/page.tsx, положи текст промта в content/prompts/<id>.txt
// и добавь запись сюда. Больше нигде править ничего не нужно.

export type ComponentEntry = {
  /** совпадает с именем файла промта content/prompts/<id>.txt */
  id: string;
  /** относительный роут демо-страницы, напр. "/cinematic-product" */
  route: string;
  num: string;
  title: string;
  desc: string;
  tags: string[];
};

export const REGISTRY: ComponentEntry[] = [
  {
    id: "cinematic-product",
    route: "/cinematic-product",
    num: "01",
    title: "Cinematic Product Scroll",
    desc: "Кинематографический скролл-шоурум: раскрытие цвета по мере прокрутки, горизонтальная галерея (anime.js)",
    tags: ["scroll", "anime.js", "e-commerce"],
  },
  {
    id: "mouse-trail",
    route: "/mouse-trail",
    num: "02",
    title: "Image Mouse Trail",
    desc: "«Мышиный след» из фотографий — картинки появляются и исчезают за курсором",
    tags: ["cursor", "interactive"],
  },
  {
    id: "background-boxes",
    route: "/background-boxes",
    num: "03",
    title: "Background Boxes",
    desc: "Анимированная изометрическая сетка: ячейки вспыхивают случайным цветом при наведении",
    tags: ["hover", "framer-motion"],
  },
  {
    id: "sticky-scroll",
    route: "/sticky-scroll",
    num: "04",
    title: "Sticky Scroll Gallery",
    desc: "Галерея на CSS sticky с плавным скроллом Lenis: средняя колонка фиксируется",
    tags: ["scroll", "lenis", "gallery"],
  },
  {
    id: "lunar-gravity",
    route: "/lunar-gravity",
    num: "05",
    title: "Lunar Gravity Card",
    desc: "3D-луна с кольцом из 60 000 частиц и поясом астероидов — кликните по луне (Three.js)",
    tags: ["3d", "three.js", "webgl"],
  },
  {
    id: "pricing-glass",
    route: "/pricing-glass",
    num: "06",
    title: "Pricing Glass",
    desc: "Стеклянные ценовые карточки: свет за курсором, переключатель Monthly/Annual, выбор фона",
    tags: ["pricing", "glassmorphism", "framer-motion"],
  },
  {
    id: "hero-ascii",
    route: "/hero-ascii",
    num: "07",
    title: "Hero ASCII",
    desc: "Чёрно-белый герой с ASCII-анимацией UnicornStudio и техническим HUD в духе Sisyphus Protocol",
    tags: ["hero", "unicornstudio", "mono"],
  },
  {
    id: "minimalist-hero",
    route: "/minimalist-hero",
    num: "08",
    title: "Minimalist Hero",
    desc: "Минималистичный герой «less is more»: жёлтый круг, портрет и крупная типографика",
    tags: ["hero", "minimal", "framer-motion"],
  },
  {
    id: "hero-3d-spline",
    route: "/hero-3d-spline",
    num: "09",
    title: "3D Hero (Spline)",
    desc: "Герой с интерактивной 3D-сценой Spline, параллакс скриншота и затухание контента при скролле",
    tags: ["hero", "3d", "spline"],
  },
  {
    id: "image-auto-slider",
    route: "/image-auto-slider",
    num: "10",
    title: "Image Auto Slider",
    desc: "Бесконечная лента изображений на чистой CSS-анимации с масками по краям",
    tags: ["slider", "css-only"],
  },
  {
    id: "agent-plan",
    route: "/agent-plan",
    num: "11",
    title: "Agent Plan",
    desc: "Иерархический план задач агента: статусы, зависимости, подзадачи и пружинные анимации",
    tags: ["list", "framer-motion", "ui"],
  },
  {
    id: "robot-hero",
    route: "/robot-hero",
    num: "12",
    title: "Robot Hero",
    desc: "3D-робот на Three.js следит за курсором, моргает и «влюбляется» по клику; антенна-навбар с CTA",
    tags: ["hero", "3d", "three.js", "shaders"],
  },
];

export function getEntryByRoute(route: string): ComponentEntry | undefined {
  return REGISTRY.find((e) => e.route === route);
}
