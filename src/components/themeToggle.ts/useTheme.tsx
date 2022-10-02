import React, { useEffect, useState } from 'react'

const useTheme = () => {
    const currentTheme = getCurrentTheme()

    const [darkModeActive, setDarkModeActive] = useState(currentTheme === 'dark')

    useEffect(() => {
        // Change localStorage state
        setTheme(darkModeActive ? 'dark' : 'light')
        const alo = localStorage?.theme || 'noup'
        console.log({alo});
    }, [darkModeActive])

    return {
        darkModeActive,
        setDarkModeActive,
    };
}

const getCurrentTheme = () => {
    if (typeof window === 'undefined') {
        return 'light'
    }
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        return 'dark'
    }
    return 'light'
}

const setTheme = (newMode: 'dark' | 'light' | 'os') => {

    if (['dark', 'light'].includes(newMode)) {
        // Whenever the user explicitly chooses light mode
        localStorage.theme = newMode
    }
    else {
        // Whenever the user explicitly chooses to respect the OS preference
        localStorage.removeItem('theme')
    }
    return
}

export default useTheme;