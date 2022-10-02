export const stylesTypes = {
    primary: 'bg-indigo-500 hover:bg-indigo-700 text-white border border-indigo-700 shadow-lg',
    secondary: 'bg-sky-500 hover:bg-sky-700 text-white border border-sky-700 shadow-lg',
    outline: 'bg-indigo-200 hover:bg-indigo-400 text-indigo-700 hover:text-white border-2 border-indigo-700 hover:border-indigo-500 shadow-lg'
}

export const getTypeStyles = (type: 'primary' | 'secondary' | 'outline'): string => {
    return stylesTypes[type]
}