import { useState } from 'react'

export const useLocalStorage = (key, initialValue) => {
    // the initial value of the storedValue state variable will be
    // what is stored in window localStorage or the initialVaue passed
    const [storedValue, setStoredValue] = useState(() => {
        const item = window.localStorage.getItem(key)
        return item ? JSON.parse(item) : initialValue
    })

    const setValue = (value) => {
        // update the state
        setStoredValue(value)
        // also update the localStorage
        window.localStorage.setItem(key, JSON.stringify(value))
    }

    // expose storedValue and setValue
    return [storedValue, setValue]
}