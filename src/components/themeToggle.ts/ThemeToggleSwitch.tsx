import { useState } from 'react'
import { Switch } from '@headlessui/react'


const ThemeToggleSwitch = ({darkModeActive, setDarkModeActive}) => {
    
    return (
        <>
        <span className='mr-4 font-bold text-gray-700 dark:text-white'>{darkModeActive? 'Dark':'Light'}</span>
            <Switch
                checked={darkModeActive}
                onChange={setDarkModeActive}
                className={`${darkModeActive ? 'bg-blue-600' : 'bg-gray-200'
                    } relative inline-flex h-6 w-11 items-center rounded-full`}
            >
                <span className="sr-only">Enable dark mode</span>
                <span
                    className={`${darkModeActive ? 'translate-x-6' : 'translate-x-1'
                        } inline-block h-4 w-4 transform rounded-full bg-white transition`}
                />
            </Switch>
        </>
    );
}

export default ThemeToggleSwitch;