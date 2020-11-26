import useDarkMode from "../hooks/useDarkMode";

export default function Wrapper({ children }) {
  const { toggleDarkMode, darkMode } = useDarkMode();

  return (
    <>
      <header className="px-8 py-4 bg-white dark:bg-gray-900 shadow-lg flex justify-between items-center">
        <ul className="flex">
          <a href="#" className="text-gray-600 dark:text-white mr-4">
            Home
          </a>
          <a href="#" className="text-gray-600 dark:text-white mr-4">
            About
          </a>
          <a href="#" className="text-gray-600 dark:text-white">
            Contact
          </a>
        </ul>
        <div className="flex items-center">
          <button
            className="p-2 md:px-6 md:py-2 text-white dark:text-black bg-purple-700 dark:bg-white hover:bg-purple-800 duration-300 rounded-sm shadow-lg focus:ring focus:ring-purple-300 focus:outline-none"
            type="button"
            onClick={toggleDarkMode}
          >
            {darkMode ? (
              <svg
                stroke="currentColor"
                fill="none"
                strokeWidth={2}
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeLinejoin="round"
                height="1.4em"
                width="1.4em"
                xmlns="http://www.w3.org/2000/svg"
                className="block md:hidden"
              >
                <circle cx={12} cy={12} r={5} />
                <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
              </svg>
            ) : (
              <svg
                stroke="currentColor"
                fill="none"
                strokeWidth={2}
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeLinejoin="round"
                height="1.4em"
                width="1.4em"
                xmlns="http://www.w3.org/2000/svg"
                className="block md:hidden"
              >
                <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
              </svg>
            )}
            <span className="hidden md:block">Toggle Dark Mode</span>
          </button>
        </div>
      </header>
      <main className="flex-grow p-8 dark:bg-gray-700">{children}</main>
    </>
  );
}
