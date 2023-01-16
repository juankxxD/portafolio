import { useEffect, useState } from 'react';

export const useTheme = (initialTheme) => {

    const [theme, setTheme] = useState(initialTheme)

    const handleChange = (e) => setTheme(e ? 'dark' : 'light')

    useEffect(() => {
        document.querySelector('.App').setAttribute('data-theme', theme);
    }, [theme])

    return [theme, handleChange]
}