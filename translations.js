const translations = {
  en: {
    title: "Tredsy - Schedule and publish to Threads",
    description: "Plan, draft, and automatically publish Threads posts from one focused iOS app."
  },
  uk: {
    title: "Tredsy - Плануйте та публікуйте дописи в Threads",
    description: "Плануйте, зберігайте в чернетках та автоматично публікуйте дописи в Threads з одного зручного iOS-застосунку.",
    "nav.features": "Можливості",
    "nav.privacy": "Конфіденційність",
    "nav.terms": "Умови",
    "nav.delete": "Видалення даних",
    "nav.support": "Підтримка",
    "hero.eyebrow": "Публікація в Threads з iPhone",
    "hero.statement": "Плануйте дописи в Threads. Публікуйте у потрібний момент.",
    "hero.lead": "Зберігайте ідеї в чернетках, додавайте медіа, плануйте дописи та публікуйте перший коментар в одному зручному iOS-застосунку.",
    "hero.availability": "Незабаром в App Store",
    "hero.support": "Написати в підтримку",
    "preview.workspace": "Робочий простір",
    "preview.month": "Червень 2026",
    "preview.calendar": "Календар",
    "preview.today": "Сьогодні",
    "preview.scheduled": "Заплановано",
    "preview.posts": "2 дописи",
    "preview.postOne": "Нотатки про продукт",
    "preview.textPost": "Текстовий допис",
    "preview.postTwo": "За лаштунками",
    "preview.mediaPost": "Допис із медіа",
    "highlights.native": "Нативний iOS-застосунок",
    "highlights.nativeText": "Створено для iPhone",
    "highlights.direct": "Пряма публікація",
    "highlights.directText": "Підключення через Threads",
    "highlights.focus": "Фокус на головному",
    "highlights.focusText": "Чернетки, планування, публікація",
    "features.eyebrow": "Спокійний процес публікації",
    "features.heading": "Усе необхідне, щоб ваша черга дописів у Threads рухалась за планом.",
    "features.schedule": "Плануйте зрозуміло",
    "features.scheduleText": "Оберіть дату й час, а потім переглядайте майбутні дописи у зручному календарі.",
    "features.published": "Опубліковано",
    "features.drafts": "Зберігайте чернетки",
    "features.draftsText": "Записуйте незавершені ідеї та повертайтеся до них, коли текст буде готовий.",
    "features.media": "Публікуйте з медіа",
    "features.mediaText": "Додавайте зображення до допису та перевіряйте результат перед публікацією.",
    "features.comment": "Додавайте перший коментар",
    "features.commentText": "За потреби публікуйте додаткову відповідь одразу після основного допису.",
    "workflow.eyebrow": "Просто за задумом",
    "workflow.heading": "Від ідеї до опублікованого допису за три кроки.",
    "workflow.connect": "Підключіть Threads",
    "workflow.connectText": "Авторизуйте акаунт через офіційний процес входу Threads.",
    "workflow.create": "Створіть допис",
    "workflow.createText": "Напишіть текст, додайте медіа та перший коментар, якщо він потрібен.",
    "workflow.publish": "Оберіть час публікації",
    "workflow.publishText": "Публікуйте зараз, зберігайте чернетку або додавайте допис до розкладу.",
    "support.eyebrow": "Потрібна допомога?",
    "support.heading": "Є питання про Tredsy?",
    "support.text": "Напишіть нам, і ми допоможемо з акаунтом або застосунком."
  }
};

function setLanguage(language) {
  const dictionary = translations[language] || translations.en;
  document.documentElement.lang = language;
  document.title = dictionary.title;
  document.querySelector('meta[name="description"]').content = dictionary.description;

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
const language = requestedLanguage === "uk" || requestedLanguage === "en"
  ? requestedLanguage
  : savedLanguage === "uk"
    ? "uk"
    : "en";

window.localStorage.setItem("tredsy-language", language);
setLanguage(language);
