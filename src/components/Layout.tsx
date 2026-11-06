import { Link, Outlet } from 'react-router';
import { useTheme } from '../context/ThemeContext';

function Layout() {
  const { theme, toggleTheme } = useTheme();

  return (
    <>
      <div className="min-h-screen dark:bg-zinc-900 dark:text-zinc-100 bg-zinc-50 text-zinc-900 transition-colors duration-200">
        <nav className="border-b border-zinc-200 dark:border-zinc-800 p-4 max-w-6xl mx-auto flex justify-between items-center">
          <Link to={"/"} className="text-xl font-bold tracking-tight">CardNotes.</Link>
          <div className="flex gap-4 items-center">
            <Link to={"/new"} className="mx-4 cursor-pointer text-sm font-medium hover:text-blue-500">New Note</Link>
            <button onClick={toggleTheme} className="cursor-pointer text-sm p-1 bg-zinc-200 dark:bg-zinc-800 rounded-md hover:bg-zinc-300 dark:hover:bg-zinc-700 transition-colors duration-200">
              {theme === "light" ? "Dark" : "Light"} Mode
            </button>
          </div>
        </nav>

        <main className="max-w-6xl mx-auto p-4 mt-8">
          <Outlet />
        </main>
      </div></>
  );
}

export default Layout;
