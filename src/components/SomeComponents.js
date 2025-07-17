import { useTheme } from "../ThemeContext";

const SomeComponent = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="p-8 flex flex-col items-center justify-center min-h-screen">
      <button
        onClick={toggleTheme}
        className="px-6 py-2 rounded-full shadow-md font-semibold text-lg border border-gray-400 hover:scale-105 transition-all duration-300"
      >
        {theme === "light☀" ? "Dark🌙" : "Light☀"}
      </button>

      <h1 className="mt-6 text-2xl font-bold">Current Theme: {theme}</h1>
    </div>
  );
};

export default SomeComponent;
