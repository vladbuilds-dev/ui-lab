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
  {
    id: "modern-hero",
    route: "/modern-hero",
    num: "13",
    title: "Modern Hero",
    desc: "Кинематографический скролл в духе SpaceX: раскрытие центрального кадра по clip-path, параллакс-снимки и Lenis",
    tags: ["hero", "scroll", "parallax", "lenis"],
  },
  {
    id: "text-effect",
    route: "/text-effect",
    num: "14",
    title: "Text Effect",
    desc: "Примитив анимации текста по символам/словам/строкам: пресеты fade/slide/blur/scale/shake и кастомные variants",
    tags: ["text", "animation", "framer-motion"],
  },
  {
    id: "ink-reveal",
    route: "/ink-reveal",
    num: "15",
    title: "Ink Reveal",
    desc: "Курсор стирает чернильную маску мазками с «дрожащим» краем, обнажая изображение — чистый canvas, без библиотек",
    tags: ["canvas", "cursor", "reveal"],
  },
  {
    id: "animated-hero-section",
    route: "/animated-hero-section",
    num: "16",
    title: "Prompting Is All You Need",
    desc: "Полноэкранный Pong, который сам выбивает пиксельный текст «PROMPTING / IS ALL YOU NEED» — чистый canvas, без библиотек",
    tags: ["canvas", "hero", "game"],
  },
  {
    id: "map",
    route: "/map",
    num: "17",
    title: "World Map",
    desc: "Точечная карта мира с анимированными дугами-маршрутами между городами, пульсирующими точками и подписями (dotted-map)",
    tags: ["map", "framer-motion", "svg"],
  },
  {
    id: "horizon-hero",
    route: "/horizon-hero",
    num: "18",
    title: "Horizon Hero",
    desc: "Космический скролл-герой на Three.js: звёздное поле, туманность, слои гор и Bloom; камера летит сквозь сцены HORIZON → COSMOS → INFINITY (GSAP)",
    tags: ["hero", "3d", "three.js", "gsap", "scroll"],
  },
  {
    id: "scroll-morph-hero",
    route: "/scroll-morph-hero",
    num: "19",
    title: "Scroll Morph Hero",
    desc: "Фотокарточки собираются из хаоса в кольцо, а по скроллу перетекают в веерную арку с 3D-флипом по наведению (framer-motion)",
    tags: ["hero", "scroll", "framer-motion", "3d"],
  },
  {
    id: "scroll-expansion-hero",
    route: "/scroll-expansion-hero",
    num: "20",
    title: "Scroll Expansion Hero",
    desc: "Медиа (видео/картинка) раскрывается на весь экран по скроллу, заголовок разъезжается, затем проявляется контент; переключатель Video/Image (framer-motion)",
    tags: ["hero", "scroll", "media", "framer-motion"],
  },
  {
    id: "dynamic-hero",
    route: "/dynamic-hero",
    num: "21",
    title: "Dynamic Hero",
    desc: "Герой с canvas-стрелкой: пунктирная дуга рисуется от курсора к кнопке CTA (следит за мышью); медиа-карточка с play-видео — чистый canvas",
    tags: ["hero", "canvas", "cursor"],
  },
  {
    id: "parallax-floating",
    route: "/parallax-floating",
    num: "22",
    title: "Parallax Floating",
    desc: "Разбросанные фото парят и смещаются параллаксом за курсором по глубине (depth), с stagger-появлением; на motion/react",
    tags: ["parallax", "gallery", "motion"],
  },
  {
    id: "vertical-tabs",
    route: "/vertical-tabs",
    num: "23",
    title: "Vertical Tabs",
    desc: "Секция услуг с вертикальными табами: автоплей с прогресс-полосой, вертикальная карусель изображений со spring-переходом (motion, hugeicons)",
    tags: ["tabs", "carousel", "motion", "autoplay"],
  },
];

export function getEntryByRoute(route: string): ComponentEntry | undefined {
  return REGISTRY.find((e) => e.route === route);
}
