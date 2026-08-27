/* Design reminder — "دفتر الأثر القيادي": controls should be direct, quiet, and preserve the dossier tone. */
(() => {
  const root = document.documentElement;
  const header = document.getElementById("siteHeader");
  const progressBar = document.getElementById("progressBar");
  const menuToggle = document.getElementById("menuToggle");
  const navigation = document.getElementById("siteNav");
  const themeToggle = document.getElementById("themeToggle");
  const themeText = document.getElementById("themeText");
  const languageToggle = document.getElementById("languageToggle");
  const navLinks = [...document.querySelectorAll(".site-nav a")];
  const sections = navLinks.map((link) => document.querySelector(link.getAttribute("href"))).filter(Boolean);

  const previewOptions = new URLSearchParams(window.location.search);
  const storedTheme = previewOptions.get("theme") || localStorage.getItem("hy-theme");
  const storedLanguage = previewOptions.get("lang") || localStorage.getItem("hy-language");

  const setTheme = (theme) => {
    root.dataset.theme = theme;
    const isArabic = root.lang === "ar";
    themeText.textContent = theme === "dark" ? (isArabic ? "فاتح" : "Light") : (isArabic ? "داكن" : "Dark");
    themeToggle.setAttribute("aria-label", theme === "dark" ? (isArabic ? "تشغيل الوضع الفاتح" : "Enable light mode") : (isArabic ? "تشغيل الوضع الداكن" : "Enable dark mode"));
    document.querySelector('meta[name="theme-color"]').setAttribute("content", theme === "dark" ? "#0c1e2a" : "#f5f1e8");
    localStorage.setItem("hy-theme", theme);
  };

  const setLanguage = (language) => {
    const isArabic = language === "ar";
    root.lang = language;
    root.dir = isArabic ? "rtl" : "ltr";
    document.title = isArabic ? "حسين يحي | سجل الأثر القيادي" : "Hussein Yehya | Leadership Impact";
    languageToggle.textContent = isArabic ? "EN" : "عربي";
    languageToggle.setAttribute("aria-label", isArabic ? "Switch to English" : "التحويل للعربية");
    setTheme(root.dataset.theme || "light");
    localStorage.setItem("hy-language", language);
  };

  setLanguage(storedLanguage === "en" ? "en" : "ar");
  setTheme(storedTheme === "dark" ? "dark" : "light");

  const updateScrollState = () => {
    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    progressBar.style.width = `${scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0}%`;
    header.classList.toggle("is-scrolled", window.scrollY > 10);
  };
  window.addEventListener("scroll", updateScrollState, { passive: true });
  updateScrollState();

  themeToggle.addEventListener("click", () => setTheme(root.dataset.theme === "dark" ? "light" : "dark"));
  languageToggle.addEventListener("click", () => setLanguage(root.lang === "ar" ? "en" : "ar"));
  menuToggle.addEventListener("click", () => {
    const expanded = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", String(!expanded));
    navigation.classList.toggle("is-open", !expanded);
  });
  navLinks.forEach((link) => link.addEventListener("click", () => { navigation.classList.remove("is-open"); menuToggle.setAttribute("aria-expanded", "false"); }));

  const revealObserver = new IntersectionObserver((entries) => entries.forEach((entry) => { if (entry.isIntersecting) { entry.target.classList.add("is-visible"); revealObserver.unobserve(entry.target); } }), { threshold:.13 });
  document.querySelectorAll(".reveal").forEach((element) => revealObserver.observe(element));
  const sectionObserver = new IntersectionObserver((entries) => { const active = entries.find((entry) => entry.isIntersecting); if (!active) return; navLinks.forEach((link) => link.classList.toggle("is-current", link.getAttribute("href") === `#${active.target.id}`)); }, { rootMargin:"-32% 0px -55% 0px", threshold:0 });
  sections.forEach((section) => sectionObserver.observe(section));
})();
