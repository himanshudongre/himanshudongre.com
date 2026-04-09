export function ThemeScript() {
  const script = `
    try {
      const stored = localStorage.getItem("theme");
      const theme = stored || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
      document.documentElement.dataset.theme = theme;
      document.documentElement.style.colorScheme = theme;
      document.documentElement.dataset.js = "true";
    } catch (error) {
      document.documentElement.dataset.js = "true";
    }
  `;

  return <script dangerouslySetInnerHTML={{ __html: script }} />;
}
