import Image from "next/image";
import { FC } from "react";
import ThemeToggleSwitch from "../../components/themeToggle.ts/ThemeToggleSwitch";
import useTheme from "../../components/themeToggle.ts/useTheme";
import { MainLayoutProps } from "./mainLayout.types";

const MainLayout: FC<MainLayoutProps> = ({ children }) => {
    const { darkModeActive,
        setDarkModeActive } = useTheme()
    return (
        <div className="bg-gradient-to-br from-sky-300 to-indigo-800 dark:bg-gradient-to-b dark:md:bg-gradient-to-br dark:from-gray-700 dark:to-slate-800 w-full min-h-screen  pt-20 px-5 md:px-2">
            <div className="text-center text-gray-50 font-bold">
                <h1 className="text-4xl uppercase">What to <span className="text-sky-50">DO</span>?</h1>
            </div>
            {/* <div className="text-center my-10 ">
                Buttons
            </div> */}
            <main className="md:px-10 mt-10">
                {children}
            </main>

            {/* <div className="text-right my-10 px-5">
                <ThemeToggleSwitch 
                    darkModeActive={darkModeActive}
                    setDarkModeActive={setDarkModeActive}
                />
            </div> */}

            <footer className="text-center py-10 text-indigo-200 dark:text-white">
                <a
                    href="https://github.com/allgrego"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Made by{' '}
                    <span className="font-bold text-white dark:text-indigo-300">
                        allgrego
                    </span>
                </a>
            </footer>
        </div>
    );
}

export default MainLayout;