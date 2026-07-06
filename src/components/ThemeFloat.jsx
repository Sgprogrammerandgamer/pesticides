export default function ThemeFloat({ theme, setTheme }) {
  return (
    <button
      type="button"
      className="theme-float"
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
    >
      {theme === 'dark' ? 'Light 🌞' : 'Dark 🌚'}
    </button>
  );
}