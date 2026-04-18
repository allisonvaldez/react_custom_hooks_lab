// Import necessary useStates and useEffect from React
import { useEffect, useState } from "react";

// Create a custom hook to accept a key and initial values
export function useLocalStorage(key, initialValue = null) {
    // Declare states with initial values from localStorage if one doesn't exists create a initialValue
    const [state, setState] = useState(() => { return localStorage.getItem(key) || initialValue; });

    // Update localstorage upone key or state change
    useEffect(() => {
        localStorage.setItem(key, state)
    }, [key, state]);

    // Return state and setter so the components read and update appropriately
    return [state, setState];
};
