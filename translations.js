/*
  Language switch for tredsy.com.

  English lives in the markup and acts as the fallback; this file only
  carries the Ukrainian overrides plus the per-language <title> and
  meta description. Keys map to `data-i18n` attributes.
*/

const translations = {
  en: {
    title: "Tredsy - Schedule and publish to Threads",
    description:
      "Draft, schedule, and publish to Threads from one focused iPhone app — with AI, analytics, and a clean queue."
  },
  uk: {
    title: "Tredsy — планувальник дописів для Threads",
    description:
      "Пиши, плануй і публікуй у Threads з одного сфокусованого iPhone-застосунку — з ШІ, аналітикою й чистою чергою.",

    "nav.how": "Як працює",
    "nav.features": "Можливості",
    "nav.who": "Для кого",
    "nav.privacy": "Приватність",
    "nav.terms": "Умови",
    "nav.delete": "Видалення даних",
    "nav.support": "Підтримка",

    "hero.eyebrow": "Планування Threads з iPhone",
    "hero.title": "Публікуй у Threads, не живучи в ньому.",
    "hero.subhead":
      "Пиши, плануй і публікуй у Threads з одного сфокусованого iPhone-застосунку — з ШІ, аналітикою й чистою чергою.",
    "hero.cta": "Незабаром в App Store",
    "hero.support": "Написати в підтримку →",

    "how.eyebrow": "Чистіший процес публікації",
    "how.title": "Одне місце для постів, які ще не готові вийти.",
    "how.lead":
      "Tredsy тримає чернетки, розклад і публікацію разом, тож планування Threads не стає ще однією вкладкою.",
    "how.s1.t": "Напиши",
    "how.s1.b": "Зафіксуй ідею, поки свіжа, додай медіа й до 5 коментарів-тредом.",
    "how.s2.t": "Заплануй",
    "how.s2.b": "Обери час виходу й дивись, як пост стоїть у чистій, впорядкованій черзі.",
    "how.s3.t": "Опублікуй",
    "how.s3.b": "Tredsy опублікує вчасно — навіть поки ти спиш — і скаже, як усе пройшло.",

    "feat.eyebrow": "Більше, ніж планувальник",
    "feat.title": "Пиши, знаходь і рости — в одному застосунку.",
    "feat.ai.t": "ШІ, що пише з тобою",
    "feat.ai.b":
      "Згенеруй із брифу з тоном і довжиною, або перепиши, скороти, розший і переклади — навіть цілий тред.",
    "feat.disc.t": "Знаходь і відповідай",
    "feat.disc.b":
      "Шукай пости в Threads за ключовим словом і відповідай, не виходячи із застосунку.",
    "feat.stats.t": "Аналітика, що має сенс",
    "feat.stats.b":
      "Дивись перегляди, лайки, відповіді й репости та стеж за динамікою за 7, 30 чи 90 днів.",
    "feat.cal.t": "Календар, а не хаос",
    "feat.cal.b":
      "Усе заплановане й опубліковане на одному чистому календарі — у тому порядку, в якому реально вийде.",

    "who.eyebrow": "Для стабільного постингу",
    "who.title": "Для тих, хто веде Threads як справжній канал.",
    "who.a.t": "Автори",
    "who.a.b": "Перетвори розкидані ідеї на стабільний ритм публікацій.",
    "who.b.t": "Засновники",
    "who.b.b": "Веди build in public за розкладом, без щоденної гонки.",
    "who.c.t": "Малі команди",
    "who.c.b": "Плануйте пости на тиждень разом — і вони вийдуть вчасно.",

    "final.title": "Сплануй свій Threads. Візьми Tredsy."
  }
};

function setLanguage(language) {
  const dictionary = translations[language] || translations.en;
  document.documentElement.lang = language;

  if (dictionary.title) {
    document.title = dictionary.title;
  }
  const descriptionTag = document.querySelector('meta[name="description"]');
  if (descriptionTag && dictionary.description) {
    descriptionTag.content = dictionary.description;
  }

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const translatedText = dictionary[element.dataset.i18n];
    if (translatedText) {
      element.textContent = translatedText;
    }
  });

  document.querySelectorAll("[data-language]").forEach((link) => {
    if (link.dataset.language === language) {
      link.setAttribute("aria-current", "true");
    } else {
      link.removeAttribute("aria-current");
    }
  });
}

const params = new URLSearchParams(window.location.search);
const requestedLanguage = params.get("lang");
const savedLanguage = window.localStorage.getItem("tredsy-language");
const language =
  requestedLanguage === "uk" || requestedLanguage === "en"
    ? requestedLanguage
    : savedLanguage === "uk"
      ? "uk"
      : "en";

window.localStorage.setItem("tredsy-language", language);
setLanguage(language);
